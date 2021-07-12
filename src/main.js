import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/assets/sass/base/_fonts.scss";

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';

import Home from './views/Home';
import Login from "./views/login";
import Register from './views/Register';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false


//rutas
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path:'/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Create',
          name: 'Create',
          component: () => import("./components/create"),
        },
        {
          path: '/Edit',
          name: 'Edit',
          component: () => import("./components/edit"),
        },
        {
          path: '/Search',
          name: 'Search',
          component: () => import("./components/search"),
        },
        {
          path: '/Listproducts',
          name: 'Listproducts',
          component: () => import("./components/listproducts"),
        },
      ]
    },
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
