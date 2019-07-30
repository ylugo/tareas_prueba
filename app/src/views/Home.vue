<template>
  <div id="app">
    <v-toolbar app color="teal lighten-2" xs12>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Tareas Vue</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer width="200" app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar size="100">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt />
          </v-avatar>
        </v-flex>
        <v-flex mt-2>
          <p class="white--text headline">pepito perez</p>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex mx-3>
          <v-btn color="success" block :to="{name: 'Login'}">salir</v-btn>
          <v-btn color="success" block :to="{name: 'Home'}">Lista de tareas</v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <Tareas />
  </div>
</template>
<script>

import Tareas from "../components/Tareas.vue";
export default {
  name: "app",
  data() {
    return {
      drawer: false
    };
  },
  components: {
    Tareas
  }
};
</script>
