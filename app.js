const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: ''
        }
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName
        },
        increment(n) {
            this.count = this.count + n;
        },
        decrement(n) {
            this.count = this.count - n;
        }
    }
});

app.mount('#events')