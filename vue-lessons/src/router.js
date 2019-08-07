import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PropExample from './views/PropExample.vue'
import CustomEventExample from './views/CustomEventExample.vue'
import RandomDogViewer from './views/RandomDogViewer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/propexample',
      name: 'PropExample',
      component: PropExample
    },
    {
      path: '/customeventexample',
      name: 'CustomEventExample',
      component: CustomEventExample
    },
    {
      path: '/dogviewer',
      name: 'RandomDogViewer',
      component: RandomDogViewer
    }
  ]
})
