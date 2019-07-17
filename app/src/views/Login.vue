<template>
  <v-app id="inspire" class="fondo">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 sm8 md4>
            <v-card class="elevation-12" color="transparent" tile>
              <v-card-text>
                <v-layout align-center justify-center pt-3>
                  <v-avatar justify-center size="120">
                    <img
                      src="https://http2.mlstatic.com/diseno-web-huancayo-diseno-web-jauja-paginas-web-D_NQ_NP_755627-MPE26036269411_092017-F.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </v-layout>
                <v-form>
                  <v-text-field color="teal lighten-2" v-model="email" prepend-icon="person"  label="Login" type="text"></v-text-field>
                  <v-text-field color="teal lighten-2" v-model="password"
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>

                  <v-btn @click="login" block color="teal lighten-2">INGRESAR</v-btn>

                  <v-btn block color="teal lighten-2" :to="{name: 'SignUp'}">CREAR CUENTA</v-btn>
                </v-form>
              </v-card-text>
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
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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