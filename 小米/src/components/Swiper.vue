<template>
  <div class="swiper">         
      <swiper auto dots-position="center" height="40vw">                  
          <swiper-item class="black"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37a79c01ef3e3d0ab5e657070e9bbbde.jpg?bg=FFFFFF" alt=""></swiper-item>
          <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/eae16128-5550-41f6-fa6c-e969a25c6b99.webp?bg=E1D8C8" alt=""></swiper-item>
          <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/d3df9dff-58da-f50e-ff73-21dfa694482f.webp?bg=B2C5AB" alt=""></swiper-item>
          <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/44c05ea1-5c4c-71bd-7bf8-ff1097bb0535.webp?bg=698FAB" alt=""></swiper-item>               
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem, XButton, Divider } from 'vux'
      
export default {
  components: {
    Swiper,
    SwiperItem,
    XButton,
    Divider
  },
  ready () {

  },
  methods: {
    
    
  },
  data () {
    return {
      
        
    }
  },
  mounted () {
      
  }
}
</script>

<style scoped>
  
.black {
  background-color: #000;
}
.black img{
    width: 100%;
    height: 45vw;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
