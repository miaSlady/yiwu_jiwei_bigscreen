import Vue from 'vue'
import Router from 'vue-router'

import TypeView from './pages/typeView'
import { TAB_MAP } from '@/assets/js/config'

Vue.use(Router)

const Routes = [{
  path: '*',
  redirect: '/overview'
},
{
  path: '/',
  redirect: '/overview',
  component: () =>
    import('@/pages/homePage'),
  children: [{
    path: 'overview',
    name: '总览',
    meta: { tabId: TAB_MAP.overview },
    component: TypeView
  },
  {
    path: 'party_manage',
    name: '党务管理',
    meta: { tabId: TAB_MAP.party_manage },
    component: TypeView
  },
  {
    path: 'village_resolution',
    name: '村务决议',
    meta: { tabId: TAB_MAP.village_resolution },
    component: TypeView
  },
  {
    path: 'resources',
    name: '资产资源管理',
    meta: { tabId: TAB_MAP.resources },
    component: TypeView
  },
  {
    path: 'village_engineering',
    name: '村级工程',
    meta: { tabId: TAB_MAP.village_engineering },
    component: TypeView
  },
  {
    path: 'farmers_build',
    name: '农民建房',
    meta: { tabId: TAB_MAP.farmers_build },
    component: TypeView
  },
  {
    path: 'property_manage',
    name: '财务管理',
    meta: { tabId: TAB_MAP.property_manage },
    component: TypeView
  },
  {
    path: 'labor_employment',
    name: '劳务用工',
    meta: { tabId: TAB_MAP.labor_employment },
    component: TypeView
  },
  {
    path: 'labor_employment',
    name: '劳务用工',
    meta: { tabId: TAB_MAP.labor_employment },
    component: TypeView
  },
  {
    path: 'aid_relief',
    name: '补助救助',
    meta: { tabId: TAB_MAP.aid_relief },
    component: TypeView
  }

  ]
},

{
  path: '/test',
  name: '弹框书写页面',
  component: () =>
    import('@/pages/test.vue')
},
{
  path: '/test3',
  name: '计算高度',
  component: () =>
    import('@/pages/test3.vue')
}
]

const createRouter = () => new Router({
  routes: Routes
})

const router = createRouter()

export default router
