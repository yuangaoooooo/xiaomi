<template>
    <div id="tj">
        
        <Swiper></Swiper>
            <div class="mi1">
                <img src="//i8.mifile.cn/v1/a1/594dec83-b317-175c-1916-e73c591452b7!180x152.webp" alt="">
                <img src="//i8.mifile.cn/v1/a1/82d92b9e-63fa-16d5-2a37-a1675c72351a!180x152.webp" alt="">
                <img src="//i8.mifile.cn/v1/a1/0437c9f2-dfba-a19f-d8d6-472e107bc4ca!180x152.webp" alt="">
                <img src="//i8.mifile.cn/v1/a1/6b06addd-6460-aa48-bdb2-043292b3d141!180x152.webp" alt="">
            </div>
            <div class="jiange"></div>
            <div class="mi2">
                <router-link to="/me/three/xq"> <img class="mi2-1" src="//i8.mifile.cn/v1/a1/95f3995c-56ec-be57-96bd-f712f55159a0!358x508.webp" alt=""></router-link>
                 <div class="mi2-2">
                     <img src="//i8.mifile.cn/v1/a1/a7dc4fb1-b9a0-ecd6-dccb-d53ec236f2c8!358x252.webp" alt="">
                     <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" alt="">
                 </div>
            </div>
            <div class="jiange"></div>
            <img class="mi3" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c985cbb77a1f8636cd946235df630009.jpg?thumb=1&w=720&h=280" alt="">
            <!-- <div class="jiange"></div> -->
            <img class="mi3" src="//i8.mifile.cn/v1/a1/e10d18a5-ef47-b955-9f6e-287f40f7aa48!720x280.webp" alt="">
            
            <img class="mi4" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6cde7d8f5bed9c5afc49d04d57a7b5f8.jpg?thumb=1&w=720&h=440" alt="">
         
            <SList></SList>
            <div class="jiange"></div>
            <img class="mi3" src="//i8.mifile.cn/v1/a1/76f6ec66-8e89-a1c0-e666-1e49a864076b!720x280.webp" alt="">
    </div>
</template>
<script>
    import Swiper from '../Swiper.vue'
    import SList from '../SList.vue'
    import { Tab, TabItem} from 'vux'
    export default {
        name:'tj',
        components: {
            Tab,TabItem,Swiper,SList
        },
    }
</script>
<style scoped>
.mi1{
    width: 100vw;
    
}
.jiange{
    width: 100vw;
    height: 2vw;
    background-color: #f2f2f2;
    clear: both;
}
.mi1 img{
    width: 25vw;
    height: 25vw;
    float: left;
}
.mi2{
    background-color: #ffffff;
}
.mi2-1{
    width: 50vw;
    height: 60vw;
    float: left;
}
.mi2-2{
    float: right;
    width: 49vw;
    height: 60vw;
}
.mi2-2 img{
    width: 49vw;
    height: 29vw;  
    
}
.mi3{
    width: 100vw;
    height: 35vw;
}
.mi4{
    width: 100vw;
    height: 60vw;
}
</style>