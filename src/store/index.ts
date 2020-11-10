import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store<any>({
  modules: {},
  getters: {},
  actions: {
    getPersons(state: any, url: any) {
      axios.get(url ? url : "https://swapi.dev/api/people/").then(response => {
        if (response && response.data) {
          store.commit("setPersons", response.data);
        }
      });
    },
    getPerson(state: any, id: any) {
      axios.get("https://swapi.dev/api/people/" + id).then(response => {
        if (response && response.data) {
          store.commit("setPerson", response.data);
        }
      });
    }
  },
  state: {
    persons: null,
    person: null
  },
  mutations: {
    setPersons(state: any, persons: any) {
      state.persons = persons;
    },
    setPerson(state: any, person: any) {
      state.person = person;
    }
  }
});

export default store;
