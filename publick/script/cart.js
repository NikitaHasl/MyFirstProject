Vue.component('cart', {
    data() {
        return {
            showCart: false,
            cartItems: [],
            imgCart: 'https://placehold.it/50x100',
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(element => element.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {
                    quantity: 1
                }).then(data => {
                    if (data.result === 1) {
                        find.quantity++;
                    }
                });

            } else {
                let newProduct = Object.assign({
                    quantity: 1
                }, product);
                this.$parent.postJson('/api/cart', newProduct)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(newProduct);
                        }
                    })

            }
        },
        removeProduct(product) {
            if (product.quantity > 1) {
                this.$parent.putJson(`/api/cart/${product.id_product}`, {
                    quantity: -1
                }).then(data => {
                    if (data.result === 1) {
                        product.quantity--;
                    }
                });

            } else {
                this.$parent.deleteJson(`/api/cart/${product.id_product}`, product)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    })
            }
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
                @remove="removeProduct">
                </cart-item>
            </div>
        </div>`

})