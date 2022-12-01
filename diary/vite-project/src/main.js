import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入vue-router
import  router  from './router/index.js';

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).mount('#app')
