<template>
  <div class="main">
      <PToolBar Name1="Go Home"/>
     <PDay style="margin-top:150px;" v-if="apod.title != null" :pic="apod"/>
  </div>
</template>

<script>
import PDay from '../components/PDay'
import PToolBar from '../components/PToolbar'
import axios from 'axios'
export default {
    data : ()=> ({
        apod:{}
    }),
    components: {
        PDay,
        PToolBar
    },
    async mounted(){
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?hd=true&date=${this.$route.params.date}&api_key=ZVNr0BqSereBHqTrF2YkTXqvXs3EW7UW1NwQl2b1`)
    const data = res.data
    console.log(data)
    this.apod = data
  }
}
</script>

<style>

</style>