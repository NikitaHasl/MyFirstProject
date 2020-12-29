Vue.component('product', {
    props: ['img', 'product'],
    template: `<div class="product-item" @click="$emit('singleProduct', product.id_product)">
                    <img :src="img" alt="Some img">
                    <div class='desc'>
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                    <button class="mini-btn-cart" @click.stop="$root.$refs.cart.addProduct(product)">В корзину</button>
                    </div>
                </div>`
});