import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Frame from '@/components/frame/Frame'
import Welcome from '@/components/frame/Welcome'
import UserInfo from '@/components/frame/user/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/frame',
      name: 'Frame',
      component: Frame,
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: Welcome
        },
        {
          path: '/userinfo',
          name: 'UserInfo',
          component: UserInfo
        }
      ]
    }
  ]
})
