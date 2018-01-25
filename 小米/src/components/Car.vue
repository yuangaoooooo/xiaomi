<template>
    <div class="car">
        <header>
            <span  class="fa fa-chevron-left fan" @click="back"></span>
            <span>购物车</span>
            <router-link to="/index/three/search" style="float:right;"><span id="sou" class="fa fa-search"></span></router-link>
        </header>
        <main>
            <group class="g2">
                <cell title="登录享更多优惠" is-link="trun"><router-link to="/me/three/login">去登录</router-link></cell>
            </group>
            <div class="gou">
                <span class="fa fa-shopping-basket"></span>购物车还是空的
                <em><router-link to="/index">去逛逛</router-link></em>
            </div>
            <img class="da" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
            
            <div class="s">
                <img src="//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172!360x360.webp" alt="">
                <p class="name">红米Note</p>
                <p class="jiage">￥699</p>
            </div>
            <div class="jiange"></div>
            <div class="s">
                <img src="//i8.mifile.cn/v1/a1/5aafa8a4-5808-bd0d-85e5-9e7ab5de337c!360x360.webp" alt="">
                <p class="name">小米6</p>
                <p class="jiage">￥1899</p>
            </div>

            <div class="s">
                <img src="//i8.mifile.cn/v1/a1/0518c80c-a1a5-af45-0898-a4e07b3d5a9f!360x360.webp" alt="">
                <p class="name">小米AI音箱</p>
                <p class="jiage">￥999</p>
            </div>
            <div class="jiange"></div>
            <div class="s">
                <img src="//i8.mifile.cn/v1/a1/e46f3ec2-8537-b2b6-3590-196e98fa44f7!360x360.webp" alt="">
                <p class="name">小米手环</p>
                <p class="jiage">￥599</p>
            </div>

            <div class="s">
                <img src="//i8.mifile.cn/v1/a1/0518c80c-a1a5-af45-0898-a4e07b3d5a9f!360x360.webp" alt="">
                <p class="name">小米AI音箱</p>
                <p class="jiage">￥999</p>
            </div>
            <div class="jiange"></div>
            <div class="s">
                <img src="//i8.mifile.cn/v1/a1/e46f3ec2-8537-b2b6-3590-196e98fa44f7!360x360.webp" alt="">
                <p class="name">小米手环</p>
                <p class="jiage">￥599</p>
            </div>
        </main>

    </div>
</template>

<script>
    import {Group,Cell} from 'vux'
    export default {
        name:'car',
        components:{
            Group,Cell
        },
        data(){
            return {
                
            }
        },
        methods:{
            back(){
                window.history.back();
            },
        
        }
    }
</script>

<style scoped>
    
header{
    width: 100%;
    height: 12vw;
    line-height: 12vw;
    text-align: center;
    font-size: 5vw;
    background-color: #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99; 
    color: gray;
}
.fan{
    padding-left: 4vw;
}
#sou{
    padding-right: 4vw;
    color: gray;
}
main{
    margin-top: 12vw;
    margin-left: 0;
    width: 100%;
}
.g2 .weui-cell{
    height: 7vw;
    font-size: 4vw;
}
.g2 a{
    color: gray;
}
.gou{
    height: 15vw;
    width: 100vw;
    text-align: center;
    line-height: 15vw;
    background-color: #f2f2f2;
    font-size: 4vw;
    color: gray;
}
.gou em{
    display: inline-block;
    border: 1px solid gray;
    line-height: 5vw;
    height: 5vw;
    width: 15vw;
    padding: 0;
    
}
em a{
    color: gray;
}
.gou span{
    font-size: 7vw;
}
.da{
    width: 100vw;
    height: 20vw;
}

.s{
    width: 49.5vw;
    height: 70vw;
    background-color: white;
    float: left;
    position: relative;
        
}
.s p{
    padding-left: 5vw;
}
.s img:nth-child(1){
    width: 49.5vw;
    height: 50vw;
}
.name{
    font-size: 4.5vw;
}
.jiage{
    font-size: 4vw;
    color: red;
}
.jiange{
    width: 1vw;
    height: 70vw;
    float: left;
}
</style>