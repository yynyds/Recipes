import Vuex from 'vuex'
import Vue from 'vue'
import foodData from './modules/food/food'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        foodData
    }
})

export default store