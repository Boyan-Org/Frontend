import Vue from 'vue'
import LoginForm from "./components/LoginForm.vue";
import RegForm from "./components/RegForm.vue";
import Dashboard from "./components/Dashboard"
import AccountInput from "./components/AccountInput.vue";
import InfoBoard from "./components/InfoBoard.vue";
import DashInfo from "./components/DashInfo";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: '/login', component: AccountInput, children: [
    {path: '', component: LoginForm}
  ]},
  { path: '/register', component: AccountInput, children: [
    {path: '', component: RegForm}
  ] },
  { path: '/dashboard', component: Dashboard , children: [
    { path: "", component: DashInfo}
  ]},
  { path: '/person', component: Dashboard, children: [
    {path: '', component: InfoBoard}
  ] },
  // { path: '/', redirect: '/dashboard'}
  { path: '/', redirect: '/login'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;