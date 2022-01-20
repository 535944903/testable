import { createApp } from 'vue'
import App from './App.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'

createApp(App).use(VXETable).use(ElementPlus).mount('#app')
