import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll'; // <-- Periksa path ini

const app = createApp(App);

app.directive('animate-on-scroll', animateOnScroll); // <-- Pastikan ini ada
app.use(router);
app.mount('#app');
