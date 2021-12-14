<template>
  <v-app>
    <v-app-bar app dark color="blue" permanent>
      <v-btn to="/" color="transparent">
        whyme
      </v-btn>
      
      <v-spacer/>
      <v-toolbar-items>
      
        <v-btn icon to="/users">
          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn icon to="/">
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn icon to="/login" v-if="!user">
          <v-icon>mdi-login</v-icon>
        </v-btn>

        <v-list-item v-if="user">
            <v-list-item-avatar>
              <img src="https://lh3.googleusercontent.com/e_GY4PanUOQFBg67GT1P2F4LKeUsz5zgRuo2Xr75tSvQiNuwDTGpgn0mhESmdTQmvdKLBLC-FGM3NgPG3CkD0Ikta2bSEj4PciRcnQ=w1064-v0">
            </v-list-item-avatar>
            <v-list-item-title class="ml-2">{{user.name}}</v-list-item-title>
        </v-list-item>

       </v-toolbar-items>
    </v-app-bar>


    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script>

export default {
  computed:{
    user(){
      return this.$store.getters.getUser
    }
  },

  name: 'App',

  components: {
  },
};
</script>
