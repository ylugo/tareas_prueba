<template>

  <v-app class="fondo">
    
    
    <router-view/>
     

    
  </v-app>
</template>

<script>
import Tareas from "./components/Tareas.vue";
import Componente from "./components/Componente.vue";
export default {
  name: "App",

 
  components: {
    Tareas,
    Componente
  }
};
</script>

<style scoped>
.fondo{
  background-image: url("./assets/fondo3.jpg");
  background-size: cover;
background-position: top center;
}
</style>

