import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      children: [{
        path: '/tsconfig',
        name: 'ts-config',
        component: require('@/components/TsConfig').default
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
