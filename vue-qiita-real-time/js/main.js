const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            items: null,
            keyword: '',
            message:''
        }
    },
    watch: {
        keyword(newkeyword, oldkeyword) {
            // console.log(newkeyword)
            this.message = 'waiting for you stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created() {
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer,1000)
    },
    methods: {
        getAnswer() {
            if (this.keyword === '') {
                this.items = null
                this.message = ''
                return 
            }

            this.message = 'Loading...'
            var vm = this
            var params = { page: 1, perpage: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function (response) {
                    console.log(response)
                    vm.items=response.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error          
                })
                .finally(function () {
                    vm.message=''
            })
        }
    }
}).mount('#app')