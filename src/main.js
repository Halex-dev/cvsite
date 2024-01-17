import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

//import { iconsSet as icons } from '@/assets/icons'

// styles
import "@/styles/style.scss";

const app = createApp(App)
app.use(router)

app.mount('#app')