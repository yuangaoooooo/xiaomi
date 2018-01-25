<template>
    <div id="ds">
        <div>
            <swiper auto dots-position="center" height="40vw">                  
                <swiper-item class="black"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2bf70582edb45d83d7120a22c87200c9.jpg?bg=FFFFFF" alt=""></swiper-item>
                <swiper-item class="black"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2bf70582edb45d83d7120a22c87200c9.jpg?bg=FFFFFF" alt=""></swiper-item>
            </swiper>
        </div>
        <div class="hang1">
            <img src="//i8.mifile.cn/v1/a1/d7c83a9c-f3e6-130d-d814-a03264228f94!720x80.webp" alt="">
        </div>

        <div style="background-color: #ffffff;">
            <div class="hang2">
                <div class="bai">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8305a1af4993651733411eb25796eab4.jpg?thumb=1&w=720&h=360" alt="">
                    <div class="jia">
                        <p>
                            <span class="na">小米电视 2s</span>
                            <span class="jg">￥999</span>
                        </p>
                        <p>
                            <span class="js">64位四核处理器 人工智能</span>
                            <del class="b">￥1199</del>
                        </p>
                    </div>
                    <img id="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>           
            </div>

            <div class="hang3">
                <div class="s">
                    <img src="//i8.mifile.cn/v1/a1/3961de40-63f1-16cc-6ced-2c034f1f5e43!360x360.webp" alt="">
                    <p class="name">小米电视4A</p>
                    <p class="jianjie">55英寸 4k HDR</p>
                    <span class="jiage">￥2799</span><del>￥2999</del>
                    <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>
                <div class="jiange"></div>
                <div class="s">
                    <img src="//i8.mifile.cn/v1/a1/ff90f0af-29a3-dead-9fc1-4455ff3eb17b!360x360.webp" alt="">
                    <p class="name">小米电视4c 43英寸</p>
                    <p class="jianjie">高清智能电视</p>
                    <span class="jiage">￥1899</span><del>￥1999</del>
                    <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>
            </div>

            <div class="hang3">
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/3961de40-63f1-16cc-6ced-2c034f1f5e43!360x360.webp" alt="">
                        <p class="name">小米电视4A</p>
                        <p class="jianjie">55英寸 4k HDR</p>
                        <span class="jiage">￥2799</span><del>￥2999</del>
                        <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                    </div>
                    <div class="jiange"></div>
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/ff90f0af-29a3-dead-9fc1-4455ff3eb17b!360x360.webp" alt="">
                        <p class="name">小米电视4c 43英寸</p>
                        <p class="jianjie">高清智能电视</p>
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
        name:'ds',
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
    font-size: 3vw;
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
    font-size: 4vw;
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