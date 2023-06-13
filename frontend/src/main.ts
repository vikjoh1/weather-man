import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(Oruga, {
  iconComponent: 'icon',
  iconPack: 'fas',
})

app.mount('#app')
