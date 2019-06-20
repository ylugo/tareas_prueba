<template>
<v-container class="mt-5">
    
    <v-layout mt-1  justify-center align-center
    style="height:30px" >
        <v-flex  xs6 >
            <v-btn @click="saludar()" >Link One</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default{
    data(){
        return {
           title: "tareas con vue" ,
        }
    },
        methods:{
            saludar(){
            alert("bobo")
        }
    }
  }
</script>

<style>

</style>
