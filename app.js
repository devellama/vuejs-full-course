const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Become a Vue Master!',
            vueLink: 'https://vuejs.org'
        }
    }
});
app.mount('#goal');