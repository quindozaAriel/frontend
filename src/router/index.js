import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

//STORE
import store from '../store/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
      islogged:true,
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
   let authentication = store.getters.getAuthentication
  
   if(authentication !== true){
    next({ path:'/login' })
   }else{
     next()
   }
   
   
  }else{
    next()
  }

  if(to.matched.some(record => record.meta.islogged)){
    let authentication = store.getters.getAuthentication
   
    if(authentication === true){
     next({ path:'/home' })
    }else{
      next()
    }
    
    
   }else{
     next()
   }
})
export default router
