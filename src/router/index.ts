import { createRouter, createWebHistory } from 'vue-router'
import Sidebar from '../views/Sidebar.vue'
import Dashbord from '../components/Dashbord.vue'
import Todos from '../components/Todos.vue'
import Profile from '../components/Profile.vue'
import Weather from '../components/Weather.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sidebar-parent',
      component: Sidebar,
      children: [
      { path: '/dashbord', name: 'dashbord', component: Dashbord },
      { path: '/todos', name: 'todos', component: Todos },
      { path: '/weather', name: 'weather', component: Weather },
      { path: '/profile', name: 'profile', component: Profile }
    ],
    },
 
  ]
})

export default router
