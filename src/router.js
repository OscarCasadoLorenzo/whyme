import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Topics from './components/Topics.vue'
import Topic from './components/Topic.vue'
import Users from './components/Users.vue'
import Login from './components/Login.vue'

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
        path:'/users',
        component:Users
    },
    {
        path:'/login',
        component:Login
    }

]

export default new VueRouter(
    {
        routes:routes,
        //Disable # in all routes
        mode:'history'
    }
)