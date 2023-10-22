import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaygroundView from '../views/PlaygroundView.vue'
import SettingsView from '../views/SettingsView.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/playground',
    name: 'playground',
    component: PlaygroundView,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes    
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  // check if route going to requires firebase authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check current firebase user
    if (await getCurrentUser()) {
      next();
      console.log('permission granted')
    } 
    else {
      alert("You cant go there sir")
      console.log("Cant access page")
      next('/');
    } 
    
  } else {
      next()
    }

})

export default router
