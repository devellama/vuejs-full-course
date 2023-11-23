const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Become a Vue Master!',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const rnd = Math.random();
            if (rnd < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    }
});
app.mount('#goal');