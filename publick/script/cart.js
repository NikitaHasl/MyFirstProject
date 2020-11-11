Vue.component('cart', {
    data() {
        return {
            showCart: false, //Свойство отвечает за показ корзины
            cartItems: [], //Массив, содержащий продукты корзины
            imgCart: 'https://placehold.it/50x100', //Заглушка картинки
        }
    },
    methods: {
        /**
         * Метод добавляет продукт в корзину.
         * @param {object} product Продукт, который нужно добавить в корзину.
         */
        addProduct(product) {
            let find = this.cartItems.find(element => element.id_product === product.id_product); //Ищем продукт который хотим добавить в корзине.
            if (find) { //Если такой продукт уже есть в корзине то увеличиваем кол-во на +1.
                this.$parent.putJson(`/api/cart/${find.id_product}`, {
                    quantity: 1
                }).then(data => {
                    if (data.result === 1) {
                        find.quantity++;
                    }
                });

            } else { //Если продукта в корзине еще нет, то создаем новый объект, содержащий новое сво-во quantity и старый объект, после чего добавляем в корзину.
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
        /**
         * Метод удаляет продукт из корзины.
         * @param {object} product Продукт, который нужно удалить из корзины.
         */
        removeProduct(product) {
            if (product.quantity > 1) { //Если кол-во продукта больше 1, то просто уменьшаем кол-во продукта на 1.
                this.$parent.putJson(`/api/cart/${product.id_product}`, {
                    quantity: -1
                }).then(data => {
                    if (data.result === 1) {
                        product.quantity--;
                    }
                });

            } else { //Если кол-во продукта = 1, то удаляем его из корзины.
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
                    this.cartItems.push(element); //Заполняем массив элементами корзины.
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