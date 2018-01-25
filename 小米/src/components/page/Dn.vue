<template>
    <div id="zn">
        <div>
            <swiper auto dots-position="center" height="40vw">                  
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/686f7339-34f4-d252-524f-c1f68e902d2e.webp?bg=C1554A" alt=""></swiper-item>
                <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/686f7339-34f4-d252-524f-c1f68e902d2e.webp?bg=C1554A" alt=""></swiper-item>
            </swiper>
        </div>
        <div class="hang1">
            <img src="//i8.mifile.cn/v1/a1/d7c83a9c-f3e6-130d-d814-a03264228f94!720x80.webp" alt="">
        </div>

        <div style="background-color: #ffffff;">
            <div class="hang2">
                <div class="bai">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8521e71034b074d862d4da8542cb9550.jpg?thumb=1&w=720&h=360" alt="">
                    <div class="jia">
                        <p>
                            <span class="na">13.3“笔记本Air i7 8Gb 独显</span>
                            <span class="jg">￥5999</span>
                        </p>
                        <p>
                            <span class="js">轻薄金属机身，指纹解锁，蓝光8M</span>
                            <del class="b">￥6999</del>
                        </p>
                    </div>
                    <img id="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>           
            </div>

            <div class="hang3">
                <div class="s">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg?thumb=1&w=360&h=360" alt="">
                    <p class="name">15.6“笔记本 i7 8Gb</p>
                    <p class="jianjie">更强悍的专业笔记本</p>
                    <span class="jiage">￥5389</span><del>￥5499</del>
                    <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>
                <div class="jiange"></div>
                <div class="s">
                    <img src="//i8.mifile.cn/v1/a1/7ced406e-f826-cd47-e4ff-f4b38209c32c!360x360.webp" alt="">
                    <p class="name">13.3“笔记本 i7 8Gb</p>
                    <p class="jianjie">金属机身 指纹解锁</p>
                    <span class="jiage">￥4799</span><del>￥4999</del>
                    <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                </div>
            </div>

            <div class="hang3">
                    <div class="s">
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg?thumb=1&w=360&h=360" alt="">
                        <p class="name">15.6“笔记本 i7 8Gb</p>
                        <p class="jianjie">更强悍的专业笔记本</p>
                        <span class="jiage">￥5389</span><del>￥5499</del>
                        <img class="ding" src="//i8.mifile.cn/v1/a1/36f9e308-9b2a-9461-4ba7-4fccba5683d2.webp?w=180&h=48" alt="">
                    </div>
                    <div class="jiange"></div>
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/7ced406e-f826-cd47-e4ff-f4b38209c32c!360x360.webp" alt="">
                        <p class="name">13.3“笔记本 i7 8Gb</p>
                        <p class="jianjie">金属机身 指纹解锁</p>
                        <span class="jiage">￥4799</span><del>￥4999</del>
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
    font-size: 4vw;
    
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