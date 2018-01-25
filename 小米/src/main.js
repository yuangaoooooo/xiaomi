// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import App from './App'
// 引入路由
import router from './router'
// 引入第三方图标
import './assets/font-awesome/css/font-awesome.css'

// 默认在点击和click事件之间有300ms的延迟
// fastClick 可以避免移动端浏览器页面点击延迟
import FastClick from 'fastclick'
// 设置作用范围
FastClick.attach(document.body)

import {Actionsheet,AlertPlugin} from 'vux'
// 插件使用弹窗
Vue.use(AlertPlugin)
// 注册全局组件使用
Vue.component('Actionsheet',Actionsheet)

// 设置默认页面为index
router.push('/index/tj')
// 导入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//滚动监听要用
import './js/iconfont.js'

Vue.use(ElementUI)
// 创建vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
