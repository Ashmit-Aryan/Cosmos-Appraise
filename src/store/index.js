import Vue from 'vue'
import Vuex from 'vuex'
import apod from '../module/apod'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        apod
    }
})
