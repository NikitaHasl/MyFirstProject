Vue.component('cart-itemlist', {
    props: ['cartItem', 'img', 'description'],
    template: `
            <div>
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="cart-product-desc">
                        <p>{{cartItem.product_name}}</p>
                        <p>Количество: {{cartItem.quantity}}</p>
                        <p>{{cartItem.price}}₽ за единицу</p>
                        <p>{{description}}</p>
                    </div>
                </div>
                <div class="right-block">
                    <p>{{cartItem.quantity*cartItem.price}}₽</p>
                    <button class="mini-btn-cart" @click="$emit('add', cartItem)">+</button>
                    <button class="mini-btn-cart" @click="$emit('remove', cartItem)">-</button>
                </div>
            </div>
    `
});