<template>
  <v-container class="mt-5 grid-list-xl">
    <v-layout row wrap>
      
      <v-flex  xs12 md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3" color="transparent">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Desacripcion de tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="success" type="submit">agregar tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editaTarea">
            <v-text-field label="Titulo de tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Desacripcion de tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="warning" type="submit">Editar</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
            {{item.titulo}}
            <p>{{item.descripcion}}</p>
            <v-btn @click="editar(index)" color="warning" class="ml-0">Editar</v-btn>
            <v-btn @click="eliminarTarea(item.id)"  color="error" >Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar">
    
      {{ mensaje }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        cerrar
      </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Titulo Tarea #1",
          descripcion: "Lorem ipsum dolor sit amet elit. Magnam nemo beatae "
        }
        
      ],
      titulo:"",
      descripcion:"",
      snackbar: false,
      mensaje:"nada",
      formAgregar:true,
      indexTarea:""
    };
  },
  methods: {
    agregarTarea() {
      console.log(this.titulo, this.descripcion);
      if(this.titulo === '' || this.descripcion === ''){
         this.snackbar = true
         this.mensaje = "Llena todos los campos!"
      } else{
          this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion     
          })
          this.titulo = ""
          this.descripcion =""
          this.snackbar = true
         this.mensaje = "Tarea agregada"
      }
    },
    eliminarTarea(id){
        this.listaTareas = this.listaTareas.filter(e => e.id != id)

    },
    editar(index){
        this.formAgregar = false
        this.titulo = this.listaTareas[index].titulo
        this.descripcion = this.listaTareas[index].descripcion
        this.indexTarea = index

    },
    editaTarea(){
        this.listaTareas[this.indexTarea].titulo = this.titulo
        this.listaTareas[this.indexTarea].descripcion = this.descripcion
        this.formAgregar = true
        this.titulo = ""
        this.descripcion = ""
    }
    
  }
}
</script>

<style>
</style>
