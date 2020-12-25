Vue.component('singleProduct', {
    data() {
        return {
            imgCart: 'https://placehold.it/400x350',
            product: {},
        }
    },
    template: `
                <div class="cart-item">
                <div class="product-bio">
                <img :src=this.imgCart>
                    <div class="cart-product-desc">
                        <p class="product-title">{{this.product.product_name}}</p>
                        <p class="product-single-price">Цена: {{this.product.price}}₽</p>
                        <p>{{this.product.description}}</p>
                    </div>
                </div>
            </div>`,
    mounted() {
        this.product = this.$parent.product
    },
});