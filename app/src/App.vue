<template>
  <v-app>
    <h1>{{title}}</h1>
    <input type="text" name="" id="">
   <router-link to="/servicios">servicios</router-link>
   <componente />
   <router-view></router-view>
  </v-app>
</template>

<script>

export default
 {
  name: 'App',
  data () {
    return {
      title:"probando"
      //
    }
  }
 }

</script>
