Vue.component('productsList', {
    data() {
        return {
            products: [], //Массив, который заполняется продуктами с сервера
            filtered: [], //Массив, для хранения отфильтрованных продуктов
            imgCatalog: 'https://placehold.it/200x150', //Заглушка на картинку
        }
    },
    methods: {
        /**
         * Метод, для фильтрования товара по заданному значению, значение прилетает из
         * userSerch компонента serch.
         * @param {string} value то, что мы ввели в userSerch.
         */
        filter(value) {
            let regExp = new RegExp(value, 'i'); //Создаем регулярку, флаг i убирает регистрозависимость.
            this.filtered = this.products.filter(element => regExp.test(element.product_name)); //С помощью метода filter, находим в массиве products элементы, у которых значение product_name содержит нашу регулярку, затем записываем все найденые продукты в массив filtered.
        }
    },
    template: `<div class="products" ref='productsList'>
                    <product ref="product" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
                </div>`,
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let element of data) {
                    this.products.push(element); //Заполняем массивы элементами перед загрузкой страницы
                    this.filtered.push(element);
                }
            });
    },

})