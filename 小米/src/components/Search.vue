<template>
    <div>
        <header>
            <span style="text-align:left;" class="fa fa-chevron-left" @click="back"></span>
            <input type="text" placeholder="搜索您想要的商品">
            <span style="text-align:right;" class="fa fa-search"></span>
        </header>
        <main>
            <div class="hot">热门搜索</div>
            <img src="http://i8.mifile.cn/b2c-mimall-media/8d09886c9f2ab2779c9e5930d7859920.jpg?bg=BD2C2C" alt="">
            <button>红米5 新品</button>
            <button>小米MIX2</button>
            <button>小AI音箱</button>
            <button>小米电视</button>
        </main>
    </div>
</template>
<script>
    export default{
        name:'search',
        methods:{
            back(){
                window.history.back();
            }
        }
    } 
</script>
<style lang="">
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
header input{
    height: 9vw;
    width: 75%;
    font-size: 4vw;
}
header span:nth-child(1){
    float: left;
    margin-top:3.5vw; 
    padding-left: 2vw;
}
header span:nth-child(3){
    float: right;
    margin-top:3.5vw; 
    padding-right: 2vw;
}
main{
    width: 90vw;
    height: 150vw;
    margin: 0 5vw;
    
}
.hot{
    width: 100%;
    height: 20vw;
    font-size: 6vw;
    line-height: 20vw;
    margin-top: 12vw;
}
main img{
    width: 100%;
    height: 35vw;
    margin-bottom: 2vw;
}
button{
    width: 20vw;
    height: 8vw;
    margin-bottom: 2vw;
    margin-right: 1vw;
}
</style>