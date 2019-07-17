import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Home from './views/Home.vue'
import Servicios from './views/Servicios.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/Login',
     
    },
    {
      path: '/',
      redirect: 'Login',
      
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios,
      meta:{
        requiresAuth: true
      }
    }

  ]
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next();
  else next();
});

export default router;