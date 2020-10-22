<template>
<div class="main">
    <v-card id="today" class="imgCard" elevation="24" rounded="true"  color="black" >
     <v-card-text>
       <v-flex xs12 mt-5>
          <h1 style="color:white; font-weight:bolder; margin:5px; text-align:center;">Today's Picture ({{pic.date}}) </h1>
        </v-flex>
    </v-card-text>
    <v-card-title>
      <iframe v-if="pic.media_type === 'video'" class="video" :src="pic.url"></iframe>
      <v-img class="img" v-else :src="pic.url"></v-img>
    </v-card-title>
    <v-card-text>
       <v-flex xs12 mt-5>
          <h1 style="color:white; font-weight:bolder; margin:20px;text-align:center;">{{pic.title}}</h1>
          <h3 class="expl" >{{pic.explanation}}</h3>
            <v-col class="text-center" cols="12">
            <v-icon  color="white" size="30" dense >mdi-copyright</v-icon>
            <strong style="color:white; font-size:20px; font-weight:bolder; " >Copyright
            {{pic.copyright}}, Nasa</strong>
          </v-col>
        </v-flex>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'PDay',
  props:{
    pic:{
      type: Object,
       default: function() {
          return {};
        }
     }
  },
   data(){
     return{
     }
  },
  methods:{
   
  }
}
</script>
<style scoped>
.imgCard{
  margin:50px;
  border-radius: 20px; 
  border:black solid 1px;
}
.expl{
  color:white; 
  font-size:20px; 
}
.img{
  border-radius: 20px;
  height:500px;
}
.video{
  width:1000px;
  height:500px;
}
@media screen and (max-width: 760px) {
  .imgCard{
    margin: 10px;
  }
  .img{
    height: 100;
  }
  .video{
    width:500px;
    height: 250px;
    margin-left:5px;
  }
}
</style>