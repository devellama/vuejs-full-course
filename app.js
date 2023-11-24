const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Become a Vue Master!',
            courseGoalB: 'Build awesome app!',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const rnd = Math.random();
            if (rnd < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#goal');