// Import Vue
import Vue from 'vue';
import Api from './api/'
import Config from './config/'
// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import IconsStyles from '@/assets/css/icons.css';
import AppStyles from '@/assets/css/app.css';

// Import App Component
import App from './app.vue';

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

Vue.prototype.$Api = Api
Vue.prototype.$Config = Config

// Init App
new Vue({
    el: '#app',
    render: h => h(App)
})
