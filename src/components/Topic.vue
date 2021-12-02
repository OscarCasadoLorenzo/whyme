<template>
  <v-container>

            <v-card class="mx-auto mb-5" color="#26c6da" dark>
              <v-card-title>
                  <span class="text-h5 font-weight-bold">{{topic.title}}</span>
              </v-card-title>

              <v-card-text class="text-h6">
              {{topic.content}}
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                  <v-img
                      class="elevation-6"
                      alt=""
                      :src="'http://localhost:3999/whyme/avatar/'+ topic.user.image"
                  ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                  <v-list-item-title>{{topic.user.name}} {{topic.user.surname}}</v-list-item-title>
                  </v-list-item-content>

                </v-list-item>
              </v-card-actions>
            </v-card>
            
            <v-card class="mx-auto mb-5" color="grey" dark v-for="comment in topic.comments" :key=comment._id>
                <v-card-text class="text-h6">
                {{comment.content}}
                </v-card-text>

                <v-card-actions>
                <v-list-item class="grow">


                    <v-list-item-content>
                    <v-list-item-title>{{comment.user}}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                </v-card-actions>
            </v-card>


  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    beforeMount(){
        var id = this.$route.params.id;

        axios 
        .get(`http://localhost:3999/whyme/topic/${id}`)
        .then(response => {
            this.topic = response.data.topic;
        })

    },

    data (){
        return {
            topic : {
              user:{

              }
            }
        }
    }
}
</script>

<style>

</style>