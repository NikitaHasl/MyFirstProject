Vue.component('catalog', {
    data() {
        return {
            filtered: [], //Массив, для хранения отфильтрованных продуктов(для поиска).
            imgCatalog: 'https://placehold.it/200x150', //Картинка товара.
        }
    },
    methods: {
        /**
         * Метод, для фильтрования товара по заданному значению, значение прилетает из
         * userSerch компонента serch.
         * @param {string} value то, что мы ввели в userSerch(строка поиска товара).
         */
        filter(value) {
            let regExp = new RegExp(value, 'i'); //Создаем регулярку, флаг i убирает регистрозависимость.
            this.filtered = this.$parent.products.filter(element => regExp.test(element.product_name)); //С помощью метода filter, находим в массиве products элементы, у которых значение product_name содержит нашу регулярку, затем записываем все найденые продукты в массив filtered.
        },
        productPage(id) {
            /**
             * Метод определяет страницу с каким товаром нужно открыть.
             * @param {number} id ID товара, который надо открыть в странице описания. 
             */
            let find = this.$parent.products.find(element => element.id_product === id); // Находим товар в массиве товаров по id.
            this.$parent.findProduct = find; // Передаем найденый товар в переменную findProduct.
            this.$parent.changeCurentPage("singleProduct"); // Переключаем страницу на описание товара.
        },
    },
    template: `<div class="products">
                    <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item" @singleProduct="productPage"></product>
                </div>`,
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let element of data) {
                    this.filtered.push(element); //Заполняем массивы элементами перед загрузкой страницы
                }
            });
    },
})