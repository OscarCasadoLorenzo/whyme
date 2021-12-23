import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import storage from './storage'

import VueCodeHighlight from 'vue-code-highlight';
 

Vue.use(VueCodeHighlight);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router : router,
  store : storage,
  render: h => h(App)
}).$mount('#app')
