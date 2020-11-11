Vue.component('product', {
    props: ['img', 'product'],
    data() {
        return {

        }
    },
    template: `<div class="product-item">
                    <img :src="img" alt="Some img">
                    <div class='desc'>
                    <h3>{{product.product_name}}1</h3>
                    <p>{{product.price}}₽</p>
                    <button class="buy-btn" @click="">Купить</button>
                    </div>
                </div>`
})