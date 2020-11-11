Vue.component('productsList', {
    data() {
        return {
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(value) {
            let regExp = new RegExp(value, 'i');
            this.filtered = this.products.filter(element => regExp.test(element.product_name));
        }
    },
    template: `<div class="products">
                    <product ref="product" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
                </div>`,
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let element of data) {
                    this.products.push(element);
                    this.filtered.push(element);
                }
            });
    },

})