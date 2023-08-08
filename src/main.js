import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

import { createPinia } from 'pinia'
const pinia = createPinia()
import piniaPlug from "pinia-plugin-persistedstate";
pinia.use(piniaPlug);

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import naive from "naive-ui";

import less from 'less'

import '@/assets/index.css'



app.use(pinia)
    .use(router)
    .use(ArcoVue)
    .use(naive)

    .use(less)
    .mount('#app')
