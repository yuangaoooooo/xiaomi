<template>
    <div>
        <div class="s">
            <img src="//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172!360x360.webp" alt="">
            <p class="name">红米Note</p>
            <p class="jianjie">5.5 高清大屏</p>
            <p class="jiage">￥699</p>
            <img class="ding" src="../assets/images/-50.png" alt="">
        </div>
        <div class="jiange"></div>
        <div class="s">
            <img src="//i8.mifile.cn/v1/a1/5aafa8a4-5808-bd0d-85e5-9e7ab5de337c!360x360.webp" alt="">
            <p class="name">小米6</p>
            <p class="jianjie">非一般的感觉</p>
            <p class="jiage">￥1899</p>
            <img class="ding" src="../assets/images/-50.png" alt="">
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
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
.jianjie{
    font-size: 3vw;
    color:gray;
}
.jiage{
    font-size: 4vw;
    color: red;
}
.ding{
    width: 25vw;
    height:7vw;
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