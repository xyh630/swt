import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./action"
import getters from "./getters"

Vue.use(Vuex)
const state = {
    test: 'z1000'
}
export default new Vuex.Store({
  state: state,
  mutations,
  actions,
  getters,
});
