import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import "./tailwind.css";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'

import router from '@/router/index'

import '@/api/interceptor'

const app = createApp(App)

app.use(ElementPlus, {locale: zhLocale})
app.use(router)
app.mount('#app')
