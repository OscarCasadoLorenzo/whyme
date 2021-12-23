import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Topics from './components/Topics.vue'
import Topic from './components/Topic.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Users from './components/Users.vue'
const routes = [
    {
        path:'/',
        component:Topics
    },
    {
        path:'/topics/:id',
        component:Topic
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/users',
        component:Users
    }

]

export default new VueRouter(
    {
        routes:routes,
        //Disable # in all routes
        mode:'history'
    }
)