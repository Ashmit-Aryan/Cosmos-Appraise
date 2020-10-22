<template>
  <div class="home">
    <PToolBar Name1="Photo Search" Name2="Today's Pic" Name3="7 Day Pics"/>
      <v-container fluid style="margin-top:100px;">
          <v-img class="img" style="border-radius:20px;" src="../assets/iss.jpg"></v-img>
      </v-container>
       <PDay  :pic="apod"/>
     <HorizontalList id="day" :Apod="allApod" />
  </div>
</template>

<script>
// @ is an alias to /src
import HorizontalList from '@/components/HorizontalList.vue'
import PDay from '../components/PDay'
import PToolBar from '../components/PToolbar'
import axios from 'axios'
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    HorizontalList,
    PDay,
    PToolBar
  },
  data(){
    return{
    apod:{   
      "copyright":"",
      "date":"2020-10-20",
      "explanation":"Saturn and Jupiter are getting closer. Every night that you go out and check for the next two months, these two bright planets will be even closer together on the sky.  Finally, in mid-December, a Great Conjunction will occur -- when the two planets will appear only 0.1 degrees apart -- just one fifth the angular diameter of the full Moon. And this isn't just any Great Conjunction -- Saturn (left) and Jupiter (right) haven't been this close since 1623, and won't be nearly this close again until 2080.  This celestial event is quite easy to see -- already the two planets are easily visible toward the southwest just after sunset -- and already they are remarkably close. Pictured, the astrophotographer and partner eyed the planetary duo above the Tre Cime di Lavaredo (Three Peaks of Lavaredo) in the Italian Alps about two weeks ago.    Follow: Live coverage of today's OSIRIS-REx attempted touchdown-and-go on asteroid Bennu",
      "hdurl":"https://apod.nasa.gov/apod/image/2010/JupiterSaturnPeaks_Hofer_1200.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Saturn and Jupiter over Italian Peaks",
      "url":"https://apod.nasa.gov/apod/image/2010/JupiterSaturnPeaks_Hofer_960.jpg"
      }
    }
  },
  computed: mapGetters(['allApod']),
  async mounted(){
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?hd=true&date=${new Date().getFullYear()}-${this.getMonth()}-${new Date().getDate()}&api_key=ZVNr0BqSereBHqTrF2YkTXqvXs3EW7UW1NwQl2b1`)
    const data = res.data
    this.apod = data
  },
  created(){
    this.get7DayApod();
  },
  methods:{
    ...mapActions(['AddApod']),
    getMonth(){
      const date = new Date().getMonth();
      var month = 0;
       switch(date){
        case 0:  month = 1;
          break;
        case 1: month = 2;
          break;
         case 2: month = 3;
          break;
           case 3: month = 4;
          break;
           case 4: month = 5;
          break;
           case 5: month = 6;
          break;
           case 6: month = 7;
          break;
           case 7: month = 8;
          break;
           case 8: month = 9;
          break;
           case 9: month = 10;
          break;
           case 10: month = 11;
          break;
           case 11: month = 12;
          break;    
      }
      return month;
    },
    async get7DayApod(){
      for (let index = 1; index <=8; index++) {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?hd=true&date=${new Date().getFullYear()}-${this.getMonth()}-${new Date().getDate()-index}&api_key=ZVNr0BqSereBHqTrF2YkTXqvXs3EW7UW1NwQl2b1`);
        const data = res.data
        this.AddApod(data);
      }
    }
  }
}
</script>
<style scoped>
.img{
  height:700px;
}
@media screen and (max-width:800px){
  .img{
    height: 300px;
    padding:20px;
  }
}
</style>