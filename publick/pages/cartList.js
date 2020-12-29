Vue.component('cartList', {
    data() {
        return {
            imgCart: 'https://placehold.it/300x250', // Картинка товара
        }
    },
    template: `
                <p v-if="!$root.$refs.cart.cartItems.length">Корзина пуста</p>
                <div v-else>
                    <cart-itemlist class="cart-item" 
                    v-for="item of $root.$refs.cart.cartItems" 
                    :key="item.id_product"
                    :cart-item="item" 
                    :img="imgCart"
                    :description="item.description"
                    @remove="$root.$refs.cart.removeProduct"
                    @add = "$root.$refs.cart.addProduct" >
                    </cart-itemlist>
                    <div class="total">
                        <p>Итого: Наименований: <b>{{$root.$refs.cart.total.name}}</b> | Кол-во товара: <b>{{$root.$refs.cart.total.quantity}}</b> | Сумма: <b>{{$root.$refs.cart.total.sum}}₽</b></p>
                        <button class="mini-btn-cart">Заказать</button>
                    </div>
                </div>`,
});