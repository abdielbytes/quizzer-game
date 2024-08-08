import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Make sure this path is correct
import './assets/styles.css';

createApp(App).use(router).mount('#app');
