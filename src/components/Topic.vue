<template>
  <v-container>
    <v-card class="mx-auto mb-5" color="#26c6da" dark>
      <v-card-title>
        <span class="text-h5 font-weight-bold">{{ topic.title }}</span>
        <v-spacer></v-spacer>
        <v-chip pill light color="orange">{{ topic.lang }}</v-chip>
      </v-card-title>

      <v-card-text class="text-h6">
        {{ topic.content }}
      </v-card-text>

      <code-highlight v-if="topic.code" class="mx-10  " style="white-space:pre;" language="javascript">
        {{topic.code}}
      </code-highlight>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              :src="'http://localhost:3999/whyme/avatar/' + topic.user.image"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ topic.user.name }} {{ topic.user.surname }}</v-list-item-title
            >
          </v-list-item-content>

          <v-card-actions v-if="user && topic.user._id == user._id">
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>

            <v-btn icon color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card
      class="mx-auto mb-5"
      color="grey"
      dark
      v-for="comment in topic.comments"
      :key="comment._id"
    >

      <v-textarea v-if="editingComment" 
        auto-grow 
        clearable 
        background-color="white" 
        light
        class="ma-5 "
        :value=comment.content
        >
 
      </v-textarea>

      <v-card-text v-if="!editingComment" class="text-h6">
        {{ comment.content }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              :src="'http://localhost:3999/whyme/avatar/' + comment.user.image"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ comment.user.name }}</v-list-item-title>
          </v-list-item-content>

          <v-card-actions v-if="user && comment.user._id == user._id">
            <v-spacer></v-spacer>

            <v-btn @click="toggleCommentEdit" v-if="!editingComment" icon>
              <v-icon >mdi-lead-pencil</v-icon>
            </v-btn>

            <v-btn v-if="!editingComment" icon color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>

            <v-btn v-if="editingComment" @click="toggleCommentEdit" dark icon>
              <v-icon>mdi-progress-check</v-icon>
            </v-btn>
          </v-card-actions>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

 

export default {
  props: ["user"],

  beforeMount() {
    var id = this.$route.params.id;

    axios.get(`http://localhost:3999/whyme/topic/${id}`).then((response) => {
      this.topic = response.data.topic;
    });
  },

  data() {
    return {
      editingComment : false,

      topic: {
        user: {},
      },
    };
  },
  components: {
    CodeHighlight,
  },
  methods: {
    toggleCommentEdit(){
      this.editingComment = !this.editingComment;
    },
 
    deleteComment() {

    }
  }  
};
</script>

<style>
</style>