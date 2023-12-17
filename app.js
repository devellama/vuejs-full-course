const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
            confirmedName: ''
        }
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert('Submitted!');
        },
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