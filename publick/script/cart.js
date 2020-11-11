Vue.component('cart', {
    data() {
        return {
            showCart: false,
            cartItems: [],
            imgCart: 'https://placehold.it/50x100',
        }
    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let element of data) {
                    this.cartItems.push(element);
                }
            });
    },
    template: `<div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="">
                </cart-item>
            </div>
        </div>`

})