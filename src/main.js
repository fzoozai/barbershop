// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hello from './components/Hello.vue'
import WelcomePage from './components/WelcomePage.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Navbar from './components/Navbar.vue'
import '../bulma/css/bulma.css'

Vue.component('welcome-section', WelcomePage);
Vue.component('about-section', About);
Vue.component('team-section', Team);
Vue.component('navbar-section', Navbar);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
