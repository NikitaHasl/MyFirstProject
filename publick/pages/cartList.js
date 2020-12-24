Vue.component('cartList', {
    data() {
        return {
            imgCart: 'https://placehold.it/300x250',
        }
    },
    template: `
                <p v-if="!$root.$refs.cart.cartItems.length" class='main'>Корзина пуста</p>
                <div v-else class='main'>
                    <cart-itemlist class="cart-item" 
                    v-for="item of $root.$refs.cart.cartItems" 
                    :key="item.id_product"
                    :cart-item="item" 
                    :img="imgCart"
                    :description="item.description"
                    @remove="$root.$refs.cart.removeProduct"
                    @add = "$root.$refs.cart.addProduct" >
                    </cart-itemlist>
                    <div>
                        <p>Итого: {{$root.$refs.cart.total}}₽</p>
                        <button>Заказать</button>
                    </div>
                </div>`,
});