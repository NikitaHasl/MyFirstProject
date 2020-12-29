const app = new Vue({
    el: '#app',
    data: {
        state: 'catalog', // Отвечает за показ нужной страницы
        products: [], // Массив продуктов каталога
        findProduct: {}, // Хранит нужный продукт, который нкжно показать на странице описания продукта
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
        deleteJson(url, data) {
            return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
        /**
         * Метод переключает страницы(каталог, корзина, описание товара)
         * @param {string} page 
         */
        changeCurentPage(page) {
            this.state = page
        },
    },
    mounted() {
        this.getJson('/api/products')
            .then(data => {
                for (let element of data) {
                    this.products.push(element); //Заполняем массивы элементами перед загрузкой страницы
                }
            });
    },
})