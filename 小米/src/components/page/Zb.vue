<template>
        <div id="zn">
            <div>
                <swiper auto dots-position="center" height="40vw">                  
                    <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/cad97940-e031-42e9-7ee5-6a1f82397b3e.webp?bg=D3D2D0" alt=""></swiper-item>
                    <swiper-item class="black"><img src="//i8.mifile.cn/v1/a1/cad97940-e031-42e9-7ee5-6a1f82397b3e.webp?bg=D3D2D0" alt=""></swiper-item>
                </swiper>
            </div>
            <div class="hang1">
                <img src="//i8.mifile.cn/v1/a1/d7c83a9c-f3e6-130d-d814-a03264228f94!720x80.webp" alt="">
            </div>
    
            <div style="background-color: #ffffff;">
                <div class="hang2">
                    <div class="bai">
                        <img src="//i8.mifile.cn/v1/a1/009c8ba9-ace8-c920-702f-632730d23184!720x360.webp" alt="">
                        <div class="jia">
                            <p>
                                <span class="na">知吾煮米锅 米家定制</span>
                                <span class="jg">￥99</span>
                            </p>
                            <p>
                                <span class="js">受热均匀，不粘锅</span>
                               
                            </p>
                        </div>
                        <img id="ding" src="//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48" alt="">
                    </div>           
                </div>
    
                <div class="hang3">
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/792f0c6a-1647-025c-cf03-8ee75801b873!360x360.webp" alt="">
                        <p class="name">8H护颈乳胶枕头 Z2</p>
                        <p class="jianjie">多重新科技 升级好睡眠</p>
                        <span class="jiage">￥389</span>
                        
                    </div>
                    <div class="jiange"></div>
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/ea3dfff6-918c-99e2-99b0-f6c2039e4338!360x360.webp" alt="">
                        <p class="name">最生活毛巾 青春系列</p>
                        <p class="jianjie">1.6秒强吸水 舒适</p>
                        <span class="jiage">￥19.9</span>
                       
                    </div>
                </div>
                <div class="hang3">
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/792f0c6a-1647-025c-cf03-8ee75801b873!360x360.webp" alt="">
                        <p class="name">8H护颈乳胶枕头 Z2</p>
                        <p class="jianjie">多重新科技 升级好睡眠</p>
                        <span class="jiage">￥389</span>
                        
                    </div>
                    <div class="jiange"></div>
                    <div class="s">
                        <img src="//i8.mifile.cn/v1/a1/ea3dfff6-918c-99e2-99b0-f6c2039e4338!360x360.webp" alt="">
                        <p class="name">最生活毛巾 青春系列</p>
                        <p class="jianjie">1.6秒强吸水 舒适</p>
                        <span class="jiage">￥19.9</span>
                        
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