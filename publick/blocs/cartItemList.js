Vue.component('cart-itemlist', {
    props: ['cartItem', 'img', 'description'],
    template: `
            <div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="cart-product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                        <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
                        <p>{{description}}</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
                    <button class="del-btn" @click="$emit('add', cartItem)">+</button>
                    <button class="del-btn" @click="$emit('remove', cartItem)">-</button>
                </div>
            </div>
    `
});