var app = new Vue(
    {
        el: '#root',
        data: {
            userNewTodo: '',
            todolist: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
        },
        methods: {
            addNewTodo() {
                // aggiunge una nuova todo in todolist solo se l'utente scrive qualcosa
                if(this.userNewTodo.length > 0) {
                    this.todolist.push(this.userNewTodo);
                    this.userNewTodo= '';
                }
            },

            deleteTodo(index) {
                this.todolist.splice(index, 1);
            }
        }
    }
);