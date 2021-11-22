<template>
  <v-app>
    <v-app-bar app dark color="blue" permanent>
      <v-app-bar-title>whyme</v-app-bar-title>
      <v-spacer/>
      <v-toolbar-items>
      
        <v-btn icon>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-tools</v-icon>
        </v-btn>


        <v-list-item-avatar>
          <img src="https://lh3.googleusercontent.com/e_GY4PanUOQFBg67GT1P2F4LKeUsz5zgRuo2Xr75tSvQiNuwDTGpgn0mhESmdTQmvdKLBLC-FGM3NgPG3CkD0Ikta2bSEj4PciRcnQ=w1064-v0">
        </v-list-item-avatar>
        <v-list-item-title class="ml-2">Oscar</v-list-item-title>

        <v-btn icon>
          <v-icon>mdi-login</v-icon>
          Login
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>


    <v-content>
      <topics></topics>
    </v-content>
  </v-app>

</template>

<script>

import Topics from './components/Topics.vue'
export default {
  name: 'App',

  components: {
    Topics
  },
};
</script>
