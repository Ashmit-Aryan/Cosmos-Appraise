<template>
<div style="background-color: black;" class="app">
  
 <v-app class="container--fulid">
    
    <v-content style="background-color: white">
      <router-view />
    </v-content>
  </v-app>
</div>
</template>

<script>


export default {
  name: 'App',

  components:{
    
  },

  data: () => ({
    //
  }),
};
</script>
