<template>
  <v-app>
    <v-toolbar app class="info" xs12>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">ingreso</v-btn>
      <v-btn class="error">salir</v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
          </v-avatar>
        </v-flex>
        <v-flex mt-2>
          <p class="white--text headline">pepito perez</p>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex mx-3>
          <v-btn color="success" block :to="{name: 'Tareas'}">Home</v-btn>
          <v-btn color="success" block>Lista de tareas</v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <tareas/>
  </v-app>
</template>

<script>
import Tareas from "./components/Tareas.vue";
import Componente from "./components/Componente.vue";
export default {
  name: "App",
  /*components: {
    Tareas,
    Componente,*/
  data() {
    return {
      drawer: true
    }
  },
  components: {
  Tareas, Componente
}
}



</script>

<style>
</style>
