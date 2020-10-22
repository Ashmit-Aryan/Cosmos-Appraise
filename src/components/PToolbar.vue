<template>
<div style="width:max-content;" class="main">
   <v-app-bar desne absolute color="black" dark  height="100px">
    <v-layout justify>
      <v-container>
        <v-layout>
          <div 
            :class="{'display-1 font-weight-bold ': $vuetify.breakpoint.smAndUp,'subtitle font-weight-bold': $vuetify.breakpoint.smAndDown}"
          >Cosmos Appraise
          </div>
          <v-spacer></v-spacer>
           <v-btn
              v-if="Name1 != null"
              style="font-weight:bolder;"
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="routerPush()"
              text
            >{{Name1}}</v-btn>
            <v-btn
               v-if="Name2 != null"
              style="font-weight:bolder;"
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#today',options )"
              text
            >{{Name2}}</v-btn>
            <v-btn
            v-if="Name3 != null"
              style="font-weight:bolder;"
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#day',options )"
              text
            >{{Name3}}</v-btn>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      }
    };
  },
  props:{
    Name1:{
      type:String,
      function () {
        return ''
      }
    },
    Name2:{
      type:String,
      function () {
        return ''
      }
    },
    Name3:{
      type:String,
      function () {
        return ''
      }
    }
  },
  methods:{
    routerPush(){
      if(this.Name1 === "Go Home"){
        this.$router.push('/')
      }else{
        this.$router.push('/APODofDay')
      }
      
    }
  }
};
</script>

<style scoped>

</style>