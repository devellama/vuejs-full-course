const app = Vue.createApp({
    data() {
        return {
            name: 'Pasha',
            age: 33,
            imgUrl: 'https://images.unsplash.com/photo-1596083786324-86740304b605?w=240'
        }
    },
    methods: {
        calcAge() {
            return this.age + 5;
        },
        calcRnd() {
            return Math.random();
        }
    }
});

app.mount('#exercise')