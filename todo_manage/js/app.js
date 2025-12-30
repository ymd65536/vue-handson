const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newItem:'',
            todos:[],
        }
    },
    methods:{
        addItem(event){
            if (this.newItem == '') return ;
            //alert();
            var todo = {
                item: this.newItem,
                isDone : false
            };
            this.todos.push(todo);
            this.newItem='';
        },
        deleteItem(index){
            this.todos.splice(index,1)
        }
    }
}).mount('#app')