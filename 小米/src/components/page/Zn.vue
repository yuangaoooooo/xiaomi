<template>
    <div id="zn">
        <div>
            <swiper auto dots-position="center" height="40vw">                  
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/9f9bf5cd-cba7-30ee-8b2c-c4d78195e910.webp?bg=7BA0B9" alt=""></swiper-item>
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/9f9bf5cd-cba7-30ee-8b2c-c4d78195e910.webp?bg=7BA0B9" alt=""></swiper-item>
            </swiper>
        </div>
        <div class="hang1">
            <img src="//i8.mifile.cn/v1/a1/d7c83a9c-f3e6-130d-d814-a03264228f94!720x80.webp" alt="">
        </div>

        <div style="background-color: #ffffff;">
            <div class="hang2">
                <div class="bai">
                    <img src="//i8.mifile.cn/v1/a1/7f75e476-f3a6-40fa-2e41-e2ed1d3f936e!720x360.webp" alt="">
                    <div class="jia">
                        <p>
                            <span class="na">小米空气净化器 2s</span>
                            <span class="jg">￥999</span>
                        </p>
                        <p>
                            <span class="js">经典升级，好空气看得见</span>
                            <del class="b">￥1199</del>
                        </p>
                    </div>
                    <img id="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>           
            </div>

            <div class="hang3">
                <div class="s">
                    <img src="//i8.mifile.cn/v1/a1/b00cc150-343a-cddd-bc81-5eb466b517c3!360x360.webp" alt="">
                    <p class="name">车载空气净化器</p>
                    <p class="jianjie">5高效净化</p>
                    <span class="jiage">￥389</span><del>￥499</del>
                    <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>
                <div class="jiange"></div>
                <div class="s">
                    <img src="//i8.mifile.cn/v1/a1/4d2f583e-e546-289f-3983-fdae7ef36e15!360x360.webp" alt="">
                    <p class="name">九号平衡车</p>
                    <p class="jianjie">年轻人的酷玩具</p>
                    <span class="jiage">￥1899</span><del>￥1999</del>
                    <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>
            </div>

            <div class="hang3">
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/b00cc150-343a-cddd-bc81-5eb466b517c3!360x360.webp" alt="">
                        <p class="name">车载空气净化器</p>
                        <p class="jianjie">5高效净化</p>
                        <span class="jiage">￥389</span><del>￥499</del>
                        <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                    </div>
                    <div class="jiange"></div>
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/4d2f583e-e546-289f-3983-fdae7ef36e15!360x360.webp" alt="">
                        <p class="name">九号平衡车</p>
                        <p class="jianjie">年轻人的酷玩具</p>
                        <span class="jiage">￥1899</span><del>￥1999</del>
                        <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                    </div>
                </div>

        </div>


    </div>
</template>
<script>
    import { Swiper, SwiperItem, XButton, Divider } from 'vux'
    export default {
        name:'zn',
        components: {
            Swiper,
            SwiperItem,
            XButton,
            Divider
        },
    }
</script>
<style scoped>
.black img{
    width: 100%;
    height: 45vw;
} 
.hang1 img{
    width: 100vw;
    height: 15vw;
} 

.hang2 img{
    width: 100vw;
    height: 50vw;
}
.bai{
    background-color: #ffffff;
    position: relative;
    width: 100vw;
    height: 72vw;
}
.jia{
    width: 100vw;
    height: 22vw;
    background-color: #ffffff;
    padding: 2vw;
    box-sizing: border-box;
}
.na{
    font-size: 4.5vw;
}
.jg{
    color: red;
    float: right;
}
.js{
    font-size: 3.5vw;
    font-weight: 100;
}
.b{
    color: red;
    float: right;
}  
#ding{
    width: 22vw;
    height:6vw;
    position: absolute;
    top: 0;
    left: 0;
}

.hang3{
    width: 100vw;
    height: 70vw;  
}
.s{
    width: 49.5vw;
    height: 70vw;
    background-color: white;
    float: left;
    position: relative;       
}
.s p,.s span{
    padding-left: 5vw;
}
del{
    font-size: 3.5vw;
}
.s img:nth-child(1){
    width: 49.5vw;
    height: 50vw;
}
.name{
    font-size: 4vw;
}
.jianjie{
    font-size: 3vw;
    color:gray;
    font-weight: 100;
}
.jiage{
    font-size: 3.5vw;
    color: red;
}
.ding{
    width: 22vw;
    height:6vw;
    position: absolute;
    top: 0;
    left: 0;

}
.jiange{
    width: 1vw;
    height: 70vw;
    float: left;
}
</style>