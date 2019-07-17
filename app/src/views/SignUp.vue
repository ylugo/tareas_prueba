<template>
  <v-app id="inspire" class="fondo">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 sm8 md4>
            <v-card class="elevation-3" color="transparent">
              <v-layout align-center justify-center pt-3>
                <v-avatar justify-center size="120">
                  <img
                    src="https://http2.mlstatic.com/diseno-web-huancayo-diseno-web-jauja-paginas-web-D_NQ_NP_755627-MPE26036269411_092017-F.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-layout>
              <v-card-text>
                <v-form>
                  <v-text-field color="teal lighten-2" prepend-icon="person"  label="Nombre" type="text"></v-text-field>

                  <v-text-field color="teal lighten-2" v-model="email" prepend-icon="mail" label="Correo" ></v-text-field>
                  <v-text-field color="teal lighten-2" v-model="password"  prepend-icon="lock" label="Contraseña" ></v-text-field>
                  <v-checkbox color="teal lighten-2" value="1" label="Acepto los terminos" type="checkbox" required></v-checkbox>
                  <v-btn @click="signUp" block color="teal lighten-2">Registrar</v-btn>
                  <v-btn block color="teal lighten-2" :to="{name: 'Login'}">Cancelar</v-btn>
                  
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
               
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase';
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('servicios')
          },
          function(err) {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
.fondo {
  background-image: url("../assets/fondo3.jpg");
  background-size: cover;
  background-position: top center;
}
</style>