<template>
  <div id="app">
    <transition name="tabbar">
        <tabbar style="position:fixed" v-show="show">
            <tabbar-item selected link="/index/tj">
                <i slot="icon" class="fa fa-home"></i>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item link="/sort">
                <i class="fa fa-list" slot="icon"></i>
                <span slot="label">分类</span>
            </tabbar-item>
            <tabbar-item link="/car">
                <i class="fa fa-shopping-cart" slot="icon"></i>
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item show-dot link="/me">
                <i class="fa fa-user-o" slot="icon"></i>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar> 
    </transition>
    <div id="main">
        <transition :name="animateType">
            <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux' 
 
export default {
  name: 'app',
  data(){
    return {
      show:true,
      animateType:''
    }
  },
  components: {
    Tabbar,TabbarItem
        },
  watch:{
    // 监听路由的变化
    $route(to,from){
      console.log(to);
      console.log(from);
      var toLevel = to.path.split('/').length;
      var fromLevel = from.path.split('/').length;
      // console.log('toLevel='+toLevel);
      // console.log('fromLevel='+fromLevel);
      var toL = to.path.length;
      var formL = from.path.length;
      console.log(toL);
      console.log(formL);
      
      if (toLevel==fromLevel) {
        // 平级切换     
        if ( toL > formL ) {
          this.animateType = 'out'
        }else{
          this.animateType = 'in'
        }
      }else if (toLevel>fromLevel) {
        // 进入下一级页面
        this.animateType = 'out'
      }else{
        // 返回上一页
        this.animateType = 'in'
      }
      console.log(this.animateType);
      // 控制tabbar显示
      if (toLevel>3) {
        this.show = false;
      }else{
        this.show = true;
      }
      
    }
  }
}
</script>

<style lang="less" >
@import '~vux/src/styles/reset.less';
body{
  background-color: #f5f5f5;
  /* width: 100vw; */
}
#main{
  padding-bottom: 50px;
}
/* 平级切换 */
.level-enter, .level-leave{
  position: absolute;
}
/* 出去 */
.out-enter{
  transform: translateX(-100%);
}
.out-leave-to{
  transform: translateX(100%)
}
.out-enter-active, .out-leave-active{
  transition: all 1s;
  position: absolute;
}
/* 进入 */
.in-enter{
  transform: translateX(100%);
}
.in-leave-to{
  transform: translateX(-100%);
}
.in-enter-active, .in-leave-active{
  transition: all 1s;
  position: absolute;
}
/* tabbar 动画 */
.tabbar-enter, .tabbar-leave-to{
  transform: translateY(100%);
}
.tabbar-enter-active, .tabbar-leave-active{
  transition: all 1s;
  /* position: absolute; */
}
</style>
