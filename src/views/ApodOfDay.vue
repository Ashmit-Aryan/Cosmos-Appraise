<template>
    <div class="day" >
      <PToolBar Name1="Go Home"/>
        <v-col
      cols="50"
      sm="25"
      md="5"
      style="margin-top:110px; margin-left:5px;"
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Pick A Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-btn
        :disabled="false"
        color="black"
        dark
        @click="getApod()"
      >Search
      </v-btn>
    </v-col>
    <PDay v-if="apod.title != null" :pic="apod"/>
  </div>
</template>
<script>
import PDay from '../components/PDay'
import PToolBar from '../components/PToolbar'
import axios from 'axios'
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      apod:{}
    }),
    components: {
    PDay,
    PToolBar
  },
  methods:{
    async getApod(){
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?hd=true&date=${this.date}&api_key=ZVNr0BqSereBHqTrF2YkTXqvXs3EW7UW1NwQl2b1`)
      const data = res.data
      console.log(data)
      this.apod = data
    }
  }
}
</script>