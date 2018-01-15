import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../libs/axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  modules: {
  },
  mutations: {
  },
  actions: {
    async postData({commit, rootState}, {url, data}) {
      try {
        let res = await axios.post(url, data);
        let resData = res.data;
        if (resData.IsSuccess) {
          if (Array.isArray(resData.Data)) {
            return {List: resData.Data, Paging: resData.Paging};
          } else {
            return resData.Data;
          }
        } else {
          throw new Error(resData.ErrorMsg);
        }
      } catch (error) {
        throw error;
      }
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});

export default store;