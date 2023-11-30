import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // (ou './router/index.js', dependendo de onde você o colocou)

const app = createApp(App);
app.use(router);
app.mount('#app');

