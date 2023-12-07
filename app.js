const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment(n) {
            this.count = this.count + n;
        },
        decrement(n) {
            this.count = this.count - n;
        }
    }
});

app.mount('#events')