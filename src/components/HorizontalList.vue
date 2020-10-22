<template>
  <div id="app">
    <section>
      <vue-horizontal-list :items="Apod" :options="options">
        <template v-slot:default="{item}">
          <div class="item">
            <v-card
            @click="$router.push(`/OneDayAPOD/${item.date}`)"
            color="black"
            elevation="16"
            style="border-radius: 20px; padding:10px;margin-left:20px;margin-right:20px"
            width="300px"
          >
            <iframe v-if="item.media_type === 'video'" width="290" height="200" :src="item.url"></iframe>
            <v-img height="200" v-else :src="item.url"></v-img>
            <h1 style="margin-top:5px; color:white;">{{item.title}}</h1>
            <h4 style="margin-top:5px; color:white;">{{item.explanation.slice(0,200)}}.........</h4>
          </v-card>
          </div>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>
 
<script>
  import Vue from 'vue';
  import VueHorizontalList from 'vue-horizontal-list';
 
  export default Vue.extend({
    name: 'ServeDev',
    props:{
        Apod:{
            type:Array,
            default: function() {
          return [];
        }
        }
    },
    components: {
      VueHorizontalList
    },
    data() {
      return {
        options: {
          responsive: [
            {end: 576, size: 1}, 
            {start: 576, end: 768, size: 2},
            {start: 768, end: 992, size: 3},
            {size: 4}
          ]
        }
      }
    }
  });
</script>
 
<style scoped>
 
</style>