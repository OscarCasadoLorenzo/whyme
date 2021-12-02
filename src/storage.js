import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const storage = {
    state:{
        token : ""
    },

    getters:{
        getToken(state){
            return state.token;
        }
    },

    mutations:{
        setToken(state,value){
            state.token = value;
        }
    },
    
    actions:{

    }
}

export default new Vuex.Store(storage);