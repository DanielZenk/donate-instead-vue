import { createApp, Vue } from 'vue'
import { MdButton } from 'vue-material/dist/components'
import App from './App.vue'

Vue.use(MdButton);

createApp(App).mount('#app')
