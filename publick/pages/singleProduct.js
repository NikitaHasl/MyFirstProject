Vue.component('singleProduct', {
    data() {
        return {
            imgCart: 'https://placehold.it/400x350', // Картинка продукта.
            product: {}, // Продукт подробного описания.
        }
    },
    template: ` <div class="single-product-bio">
                <img :src=this.imgCart>
                    <div class="single-product-desc">
                        <p>Название: {{this.product.product_name}}</p>
                        <p>Цена: {{this.product.price}}₽</p>
                        <p>Описание:</p>
                        <p>{{this.product.description}}</p>
                        <button class="mini-btn-cart" @click.stop="$root.$refs.cart.addProduct(product)">В корзину</button>
                    </div>
                </div>`,
    mounted() {
        this.product = this.$parent.findProduct //При создании компонента загружаем продукт, который выбрали в каталоге.
    },
});