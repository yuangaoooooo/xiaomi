import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import Sort from '../components/Sort.vue'
import Car from '../components/Car.vue'
import Me from '../components/Me.vue'
import Second from '../components/Second.vue'
import Search from '../components/Search.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Xq from '../components/Xq.vue'
import Tj from '../components/page/Tj.vue'
import Sj from '../components/page/Sj.vue'
import Zn from '../components/page/Zn.vue'
import Ds from '../components/page/Ds.vue'
import Dn from '../components/page/Dn.vue'
import Yf from '../components/page/Yf.vue'
import Mu from '../components/page/Mu.vue'
import Zb from '../components/page/Zb.vue'
import Qmp from '../components/page/Qmp.vue'
import Ys from '../components/page/Ys.vue'
import Hz from '../components/page/Hz.vue'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/index',component:Index,
      children:[
        {path: 'tj',component:Tj },
        {path: 'sj',component:Sj },
        {path: 'zn',component:Zn },
        {path: 'ds',component:Ds },
        {path: 'dn',component:Dn },
        {path: 'qmp',component:Qmp },
        {path: 'zb',component:Zb },
        {path: 'yf',component:Yf },
        {path: 'mu',component:Mu },
        {path: 'hz',component:Hz },
        {path: 'ys',component:Ys },
      ]
     },
    {path: '/sort',component:Sort},
    {path: '/car',component:Car },
    {path: '/me',component:Me },
    {path: '/index/three/search',component:Search },
    {path: '/me/three/login',component:Login },
    {path: '/me/three/register',component:Register },
    {path: '/me/three/xq',component:Xq },
    
    // 二级界面
    // {path: '/index/second',component:Second },
  ]
})
