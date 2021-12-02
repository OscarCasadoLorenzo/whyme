<template>
    <v-container>  
        <v-card class= "mb-5" v-for="topic in topics" :key=topic._id :to="'/topics/'+topic._id">
            <v-card-title>{{topic.title}}</v-card-title>
            <v-card-text>{{topic.content}}</v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
beforeMount(){
    axios 
      .get('http://localhost:3999/whyme/topics')
      .then(response => {
        this.topics = response.data.topics;
      })
  },

  data (){
    return {
        topics : []
    }
  }
}


</script>

<style>

</style>