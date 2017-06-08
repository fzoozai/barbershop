// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hello from './components/Hello.vue'
import WelcomePage from './components/WelcomePage.vue'
import Team from './components/Team.vue'
import Navbar from './components/Navbar.vue'
import Service from './components/Services.vue'
import Footer from './components/Footer.vue'
import Delimiter from './components/Delimiter.vue'
import '../bulma/css/bulma.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


const contentful = require('contentful');


Vue.component('welcome-section', WelcomePage);
Vue.component('team-section', Team);
Vue.component('navbar-section', Navbar);
Vue.component('service-section', Service);
Vue.component('footer-section', Footer);
Vue.component('delimiter-section', Delimiter);


Vue.config.productionTip = false;







/* ------------------------------ REFERENCE TO OUR MAIN VUE INSTANCE IN COMBO WITH AUTHO ------------------------------ */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

  data () {
  },

});

