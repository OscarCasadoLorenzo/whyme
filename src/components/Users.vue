<template>
  <v-container >
      <v-layout row wrap>
          <v-flex xs6 md4 lg2 v-for="userProfile in users" :key=userProfile._id>
              <v-card class="ma-5 pa-5">
                  <v-avatar>
                    <img 
                        :src="'http://localhost:3999/whyme/avatar/'+ userProfile.image"
                    >
                    
                  </v-avatar>
                 
                  <v-card-title>{{userProfile.name}}</v-card-title>
              </v-card>
          </v-flex>   
      </v-layout>
  </v-container>    
</template>

<script>
import axios from 'axios';
export default {
    beforeMount(){
        axios 
        .get('http://localhost:3999/whyme/users')
        .then(response => {
            this.users = response.data.users;
        })
    },

    data (){
        return {
            users : []
        }
    }
}
</script>

<style>

</style>