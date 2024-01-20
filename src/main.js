import { createApp, provide, h } from 'vue'
import vuetify from './plugins/vuetify'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql/apollo.js'
import VueApexCharts from 'vue3-apexcharts'
import store from './store'
import App from './App.vue'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
app.use(vuetify).use(VueApexCharts).use(store).mount('#app')
