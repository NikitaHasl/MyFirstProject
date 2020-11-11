Vue.component('productsList', {
    data() {
        return {
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {},
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