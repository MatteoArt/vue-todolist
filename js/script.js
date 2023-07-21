

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
            ]
        }
    },
    methods: {

    }
}).mount("#app");