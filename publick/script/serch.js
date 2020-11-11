Vue.component('serch', {
    data() {
        return {
            userSearch: '' //Значение привязано к полю ввода в поисковой форме
        }
    },
    template: `
            <form action="#" class="search-form" @submit.prevent="$parent.$refs.productsList.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
})