import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);

const storage = {
    state:{
        user : {
            name:'',
            surname:'',
            email : '',
            password : '',
            image: null,
        }
    },

    getters:{
        getUser(state){
            return state.user;
        }
    },

    mutations:{
        setUser(state,user){
            state.user = user;
        },

        setImage(state, image){
            state.user.image = image;
        }
    },
    
    actions:{
        login(context, credentials){
            axios.post(
                'http://localhost:3999/whyme/login',
                credentials
            ).then((response) =>{
                localStorage.setItem("token", response.data.token)
                context.commit('setUser', response.data.user)
 
            })  
        },

        logout(context){
            localStorage.removeItem("token");
            context.commit('setUser', null);
        },

        register(context, credentials){
            axios.post(
                'http://localhost:3999/whyme/register/',
                credentials
            )
        }
    }
    
}

export default new Vuex.Store(storage);