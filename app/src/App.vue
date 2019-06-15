<template >
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-btn class="success">ingreso</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyAHyFJM5_llntGiU302oJKIsF3wv-ooOD8",
    authDomain: "tareas-935a9.firebaseapp.com",
    databaseURL: "https://tareas-935a9.firebaseio.com",
    projectId: "tareas-935a9",
    storageBucket: "tareas-935a9.appspot.com",
    messagingSenderId: "161731479883",
    appId: "1:161731479883:web:51039f241d0179d5"
   

};
 let app = firebase.initializeApp(config);
 let db = app.database();

export default {
  name: "App",
  data() {
    return {
      title: "probando"
      //
    };
  }
};
</script>
<style>


</style>

