import { createApp } from 'vue'
import App from './App.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';


/*createApp(App).mount('#app')
*/
const app = createApp(App);
app.component('scroll-parallax', ScrollParallax);

app.mount('#app');