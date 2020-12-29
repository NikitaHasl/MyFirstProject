Vue.component('serch', {
    data() {
        return {
            userSearch: '' //Значение привязано к полю ввода в поисковой форме
        }
    },
    template: `
            <form action="#" class="search-form" @submit.prevent="$root.$refs.main.filter(userSearch)" v-show="$parent.state === 'catalog'">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
})