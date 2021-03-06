import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/home/Home";
import Index from "../components";
import Bookshelf from "../components/bookshelf/Bookshelf";
import Test from "../components/bookshelf/test";
import NoteEdit from "../components/note/NoteEdit";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/home',
      children:[
        {
        path: '/home',
        name: 'Home',
        component: Home,
        },
        {
          path: '/bookshelf',
          name: 'Bookshelf',
          component: Bookshelf,
        },
        {
          path: '/note/edit',
          name: 'NoteEdit',
          component: NoteEdit,
        },
      ]
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ]
})
