import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);

const storage = {
    state:{
        user : null
    },

    getters:{
        getUser(state){
            return state.user;
        }
    },

    mutations:{
        setUser(state,user){
            state.user = user;
        }
    },
    
    actions:{
        login({commit}, credentials){
            axios.post(
                'http://localhost:3999/whyme/login',
                credentials
            ).then((response) =>{

                if(response.data.msg)
                    throw response.data.msg
            })
            
        }
    }
    
}

export default new Vuex.Store(storage);