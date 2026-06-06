import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // импортируем настроенный роутер
const app = createApp(App)
app.use(router) // используем роутер в приложении
app.mount('#app')