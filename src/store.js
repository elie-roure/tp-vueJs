import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    skills: []
  },
  mutations: {
    increment(state, payload) {
      return (state.count = state.count + payload.amount);
    },
    decrement(state, payload) {
      return (state.count = state.count - payload.amount);
    },
    addSkill(state, payload) {
      let feed = { skill: payload.skill, percent: payload.percent };
      state.skills.push(feed);
      /*state.percent = payload.percent;*/
      return;
    },
    removeSkill(state, payload) {
      state.skill = "";
      state.percent = "";
      return;
    }
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
    addSkill(context, payload) {
      context.commit("addSkill", payload);
    },
    removeSkill(context, payload) {
      context.commit("removeSkill", payload);
    }
  }
});
export default store;
