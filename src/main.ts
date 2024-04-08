import App from './App.vue'
import { createApp } from 'vue'
import withUUID from 'vue-uuid'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/global.css'

const app = withUUID(createApp(App))

app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
})
app.mount('#app')
