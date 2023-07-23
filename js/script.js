

Vue.createApp({
    data() {
        return {
            todoArr : [
                {
                    id: 1,
                    text: 'Have a shower',
                    done: true
                },
                {
                    id: 2,
                    text: "To have breakfast",
                    done: true
                },
                {
                    id: 3,
                    text: "Go to work",
                    done: false
                },
                {
                    id: 4,
                    text: "Check emails",
                    done: true
                },
                {
                    id: 5,
                    text: "Go to gym",
                    done: false
                }
            ],
            barred: "barred-txt",
            elBtn: "btn-delete",
            //oggetto che viene pushato nell'array di oggetti 
            //ogni volta che l'utente clicca per aggiungere
            newTodoItem: {
                text: "",
                done: false
            },
            currentId: 5 //proprietà che conterrà di volta in volta l'id dell'ultimo elemento aggiunto
        }
    },
    methods: {
        //riceve in ingresso un booleano e controlla se la proprietà
        //done è true o false
        crossedOut(done) {
            if (done === true) {
                return this.barred;
            } else {
                return "";
            }
        },
        //funzione a cui passo l'id dell'elemento dell'array di oggetti
        //da eliminare
        deleteItem(id) {
            //indice dell'oggetto da eliminare
            let index;
            for (let i = 0; i < this.todoArr.length; i++) {
                let item = this.todoArr[i];
                if (item.id === id) {
                    index = i;
                    break;
                }
            }
            //ora che ho l'indice elimino l'oggetto nell'array in
            //posizione index
            this.todoArr.splice(index,1);
        },
        //funzione che al click aggiunge un elemento alla lista
        addTodo() {
            //creo clone dell'oggetto newTodoItem per eliminare la reattività
            const itemCopia = {...this.newTodoItem};
            itemCopia.id = ++this.currentId;
            
            this.todoArr.push(itemCopia);
        }
    }
}).mount("#app");