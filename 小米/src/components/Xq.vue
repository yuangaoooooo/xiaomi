<template>
    <div id="xq">
        <div id="foot">
            <div id="f1">
                <span class="fa fa-home"></span>
                <p><router-link to="/index/tj">首页</router-link></p>
            </div>
            <div id="f2">
                <span class="fa fa-shopping-cart"></span>
                <p><router-link to="/car">购物车</router-link></p>
            </div>
            <div id="f3">
                加入购物车    
            </div>
        </div>
        <main>
            <swiper auto dots-position="center" height="110vw" width="100vw">                  
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/6ef534bb-6817-f6e2-192a-460e659819b8.webp?bg=684A46" alt=""></swiper-item>
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/6ef534bb-6817-f6e2-192a-460e659819b8.webp?bg=684A46" alt=""></swiper-item>
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/6ef534bb-6817-f6e2-192a-460e659819b8.webp?bg=684A46" alt=""></swiper-item>
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/6ef534bb-6817-f6e2-192a-460e659819b8.webp?bg=684A46" alt=""></swiper-item>               
            </swiper>
            <div class="d2">
                <span class="fa fa-chevron-left" @click="back"></span>
            </div>
            <div class="d1">
                <span class="fa fa-share-alt"></span>
            </div>
            <img class="i1" src="http://i8.mifile.cn/b2c-mimall-media/8faead40c13a870628771268d5cca448.jpg" alt="">
            <div class="js">
                <p style="font-size:5vw;">小米6PLUs</p>
                <p style="font-size:3vw;color:red;">【手机品牌日：送耳机，享6期免息】</p>
                <p style="font-size:3vw;">超性能，千元全面屏/前置柔光自拍/骁龙八核处理器</p>
                <p style="font-size:7vw;color:red;">￥2599</p>
            </div>
            <div class="xuan">
                <div class="x1">促销&#x3000;
                    <span style="color:#ff6700">赠品</span>
                    <span>赠小米活塞耳机</span>
                    <span class="fa fa-chevron-right"></span></div>
                <div>已选&#x3000; 小米6plus<span class="fa fa-chevron-right"></span></div>
                <div>送至&#x3000; 北京市 东城区 
                    <span style="color:#ff6700">有现货</span>
                    <span class="fa fa-chevron-right"></span></div>
                <div>&#x3000;&#x3000;&#x3000;支持7天无理由退货</div>
            </div>
        </main>
    </div>
</template>
<script>
    import { Swiper, SwiperItem, XButton, Divider } from 'vux'
    export default {
        name:'xq',
        components: {
          Swiper,
          SwiperItem,
          XButton,
          Divider
        },
        methods:{
            back(){
                window.history.back();
            }
        }
    
    }
</script>
<style scoped>
#xq{
 width: 100vw;
 /* position: relative; */
 
}
#foot{
    width: 100vw;
    height: 15vw;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
}
#foot div{height: 18vw;
    height: 15vw;
    float: left;
    text-align: center;
}
#foot #f1,#f2{
    width: 20vw;
    background-color: #ffffff;
    color: gray;
    font-size: 4vw;
    
}
#foot #f1 span,#f2 span{
    font-size: 5vw;
}
#f3{
    width: 60vw;
    background-color: #ff6700;
    color: #ffffff;
    line-height: 15vw;
    font-size: 4vw;
}

 
 main{
     width: 100vw;
     height: 100vh;
     margin: 0px;
     padding: 0px;
     padding-bottom: 25vw;
 }
 .black{
    width: 100vw;
    height: 110vw;
 }
.black img{
    width: 100vw;
    height: 110vw;
}
.d1,.d2{
    width: 10vw;
    height: 10vw;
    background-color: gray;
    border-radius: 5vw;
    text-align: center;
    line-height: 10vw;
    opacity: 0.5;
    font-size: 4vw;
    color: wheat;
}
p a{
    color: gray;
}
.d1{
    position: absolute;
    right: 2vw;
    top: 2vw;
}
.d2{
    position: absolute;
    left: 2vw;
    top: 2vw; 
}
.i1{
    width: 100vw;
    height: 12vw;
}
.js{
    background-color:#fefefe;
    margin-bottom: 1vw;
    padding-left: 3vw;
}
.xuan div{
    width: 100vw;
    height: 10vw;
    background-color:#fefefe;
    padding-left: 3vw;
    font-size: 3vw;
    line-height: 10vw;
    position: relative;
}
.x1{
    margin-bottom: 1vw;
}
.fa-chevron-right{
    position: absolute;
    top: 4vw;
    right: 6vw;
    color: gray;
}
</style>