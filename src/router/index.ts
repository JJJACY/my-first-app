import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import News from '@/views/News.vue';
import My from '@/views/My.vue';
import testOne from '@/views/testOne.vue'
import testTwo from '@/views/testTwo.vue'
import testHree from '@/views/testHree.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/testone',
    name: 'testOne',
    component: testOne
  },
  {
    path: '/testtwo',
    name: 'testTwo',
    component: testTwo
  },
  {
    path: '/testhree',
    name: 'testHree',
    component: testHree
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
