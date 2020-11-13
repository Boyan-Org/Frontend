import Vue from 'vue'
import LoginForm from "./components/LoginForm.vue";
import RegForm from "./components/RegForm.vue";
import Dashboard from "./components/Dashboard"
import AccountInput from "./components/AccountInput.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: '/login', name:'Login', component: AccountInput, children: [
    {path: '', component: LoginForm}
  ]},
  { path: '/register', name:'Register', component: AccountInput, children: [
    {path: '', component: RegForm}
  ] },
  { path: '/dashboard', name:'Dashboard', component: Dashboard },
  { path: '/', redirect: '/login'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;