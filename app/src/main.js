import '@babel/polyfill'
import Vue from 'vue'
import firebase from 'firebase'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

let app = '';

var firebaseConfig = {
  apiKey: "AIzaSyDvSwn4x-G93nFqYkb8bQesy8Hh8YOY0JY",
  authDomain: "bdtareas-5fc8f.firebaseapp.com",
  databaseURL: "https://bdtareas-5fc8f.firebaseio.com",
  projectId: "bdtareas-5fc8f",
  storageBucket: "",
  messagingSenderId: "699806958166",
  appId: "1:699806958166:web:1d55366296e21b95"

};
 firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});