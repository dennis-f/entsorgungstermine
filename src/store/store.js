import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		streets: []
	},
	actions: {
    LOAD_CONFIG: function ({ commit }) {
      let self = this;
      let uri = '../static/data/potsdam/streetnames.json';
      axios.get(uri)
      .then(function (response) {
        commit('SET_CONFIG', { list: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mutations: {
    SET_CONFIG: (state, { list }) => {
      state.streets = list;
    }
  },
  getters: {
    getStreets: state => {
      return state.streets;
    },
    getDatesFor: state => (streetName) => {
      let self = this;
      let uri = `../static/data/potsdam/${streetName}.json`;
      return axios.get(uri);
    }
  }
})

export default store