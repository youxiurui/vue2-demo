import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'
import Admin from '../components/Admin/Admin.vue'

Vue.use(Router)

const routes=[
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/login',
        component:Login
    },{
        path:'/home',
        component:Home
    },{
        path:'/admin',
        component:Admin
    }
]

const router = new Router({
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.path!=='/login'&&!JSON.parse(localStorage.getItem('isLogin'))){
        next('/login')
    }else{
        next()
    }
})

export default router