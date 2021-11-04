import loadable from '@loadable/component'
import Home from '@/views/Home'
const Routers = [
  {
    path: '/',
    name: '首页',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: loadable(() => import('@/views/About.js')),
  },
  {
    path: '/classReact',
    name: 'classReact',
    component: loadable(() => import('@/views/ClassReact')),
  },
  {
    path: '/hookLearn',
    name: 'HookLearn',
    component: loadable(() => import("@/views/HookLearn")),
  }
]
export default Routers