<template>
    <div id='sort'>

        <header>
            <span id="fan" class="fa fa-chevron-left" @click="back"></span>
            <span>分类</span>
            <router-link to="/index/three/search" style="float:right;"><span id="sou" class="fa fa-search"></span></router-link>
        </header>

        <div class='main-body'>
        <ul id="da">
            <li class="d_jump">
                新品
                <img class="da" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9697e47fba19edeeb0439ed30827afff.jpg?thumb=1&w=500&h=200" alt="">
                <div class="xiao">
                    <p>手机</p>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/dd2cdf91ccdadcbe9776050eebb5b437!120x120.png" alt="">
                        <p>红米5</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b!120x120.png" alt="">
                        <p>小米6</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/f0e283f74845939fd24d53f7fb1d35c1!120x120.png" alt="">
                        <p>小米note</p>
                    </div>
                </div>
                <img class="da" src="//i8.mifile.cn/v1/a1/3d32aa5e-10bd-078a-0a53-f365c59a1be9!500x200.webp" alt="">
            </li>
            <li class="d_jump">
               — 手机 —
                <div class="xiao">
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/dd2cdf91ccdadcbe9776050eebb5b437!120x120.png" alt="">
                        <p>红米5</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b!120x120.png" alt="">
                        <p>小米6</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/f0e283f74845939fd24d53f7fb1d35c1!120x120.png" alt="">
                        <p>小米note</p>
                    </div>
                    <div>
                            <img src="//i8.mifile.cn/b2c-mimall-media/dd2cdf91ccdadcbe9776050eebb5b437!120x120.png" alt="">
                            <p>红米5</p>
                        </div>
                        
                        <div>
                            <img src="//i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b!120x120.png" alt="">
                            <p>小米6</p>
                        </div>
                        <div>
                            <img src="//i8.mifile.cn/b2c-mimall-media/f0e283f74845939fd24d53f7fb1d35c1!120x120.png" alt="">
                            <p>小米note</p>
                        </div>
                </div>
            </li>
            <li class="d_jump">— 电视 —
                <div class="xiao">
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg" alt="">
                        <p>32英寸</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg" alt="">
                        <p>45英寸</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg" alt="">
                        <p>65英寸</p>
                    </div>
                    <div>
                            <img src="//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg" alt="">
                            <p>32英寸</p>
                        </div>
                        
                        <div>
                            <img src="//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg" alt="">
                            <p>45英寸</p>
                        </div>
                        <div>
                            <img src="//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg" alt="">
                            <p>65英寸</p>
                        </div>
                </div> 
            </li>
            <li class="d_jump">— 电脑 —
                <div class="xiao">
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png" alt="">
                        <p>笔记本</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png" alt="">
                        <p>笔记本</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png" alt="">
                        <p>笔记本</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png" alt="">
                        <p>笔记本</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png" alt="">
                        <p>笔记本</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png" alt="">
                        <p>笔记本</p>
                    </div>
                </div> 
            </li>
            <li class="d_jump">— 家电 —
                <div class="xiao">
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9370fface3457e13c0db169f650fa05.png?thumb=1&w=120&h=120" alt="">
                        <p>电饭煲</p>
                    </div>
                    
                    <div>
                        <img src="//i1.mifile.cn/v1/a1/T1hyAgB_VT1R4cSCrK!120x120.png" alt="">
                        <p>净水器</p>
                    </div>
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/41c838f5587ef2e6d0a8e1a18a86bace.png?thumb=1&w=120&h=120" alt="">
                        <p>净化器</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/101e2128-624d-ce9f-973f-50b868f8036a!120x120.png" alt="">
                        <p>扫地机器人</p>
                    </div>
                    
                    
                </div>
            </li>
            <li class="d_jump">— 路由 —
                <div class="xiao">
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b6af48e3285c69c7143c9906c8f5db01!120x120.jpg" alt="">
                        <p>路由器1</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b6af48e3285c69c7143c9906c8f5db01!120x120.jpg" alt="">
                        <p>路由器3</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b6af48e3285c69c7143c9906c8f5db01!120x120.jpg" alt="">
                        <p>路由器3g</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b6af48e3285c69c7143c9906c8f5db01!120x120.jpg" alt="">
                        <p>路由器2</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b6af48e3285c69c7143c9906c8f5db01!120x120.jpg" alt="">
                        <p>路由器H</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b6af48e3285c69c7143c9906c8f5db01!120x120.jpg" alt="">
                        <p>路由器</p>
                    </div>
                </div>
            </li>
            <li class="d_jump">— 智能 —
                <div class="xiao">
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c195bfa5edff0b02da47231023cf6789.jpg?thumb=1&w=120&h=120" alt="">
                        <p>摄像机</p>
                    </div>
                    
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9363c83afe8185b63fc84357b3017697.png?thumb=1&w=120&h=120" alt="">
                        <p>vr眼镜</p>
                    </div>
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c195bfa5edff0b02da47231023cf6789.jpg?thumb=1&w=120&h=120" alt="">
                        <p>摄像机</p>
                    </div>
                    
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9363c83afe8185b63fc84357b3017697.png?thumb=1&w=120&h=120" alt="">
                        <p>vr眼镜</p>
                    </div>   
                </div>
            </li>
            <li class="d_jump">— 电源 —
                <div class="xiao">
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/307f6347f6703aeed23c19bfb02ad607.png?thumb=1&w=120&h=120" alt="">
                        <p>插线板</p>
                    </div>
                    
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3d2e61dad0a2e3b50201ce3714d2fb3.png?thumb=1&w=120&h=120" alt="">
                        <p>彩虹电池</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/3563cadb-795d-2240-c83d-9aeedd67ff4e!120x120.jpg" alt="">
                        <p>移动电源</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/3563cadb-795d-2240-c83d-9aeedd67ff4e!120x120.jpg" alt="">
                        <p>移动电源</p>
                    </div>  
                </div>
            </li>
            <li class="d_jump">— 耳机 —
                <div class="xiao">
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/11ad3681debb4a8d59a2ed600ef8bb5b!120x120.png" alt="">
                        <p>线控耳机</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/v1/a1/7b45823a-9913-5871-55c1-82b83c92ec32!120x120.jpg" alt="">
                        <p>蓝牙耳机</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/11ad3681debb4a8d59a2ed600ef8bb5b!120x120.png" alt="">
                        <p>线控耳机</p>
                    </div>
                    
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c45a549683b997d687b8b4071463689e.png?thumb=1&w=120&h=120" alt="">
                        <p>头戴式耳机</p>
                    </div>  
                </div>
            </li>
            <li class="d_jump">— 音箱 —
                <div class="xiao">
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c50ff1d52895216952388343a6e2a45.png?thumb=1&w=120&h=120" alt="">
                        <p>小AI音响</p>
                    </div>
                    
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c50ff1d52895216952388343a6e2a45.png?thumb=1&w=120&h=120" alt="">
                        <p>蓝牙音箱</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/b72df8d6174c6783d387721aa635932a!120x120.png" alt="">
                        <p>小AI音响</p>
                    </div>
                </div>
            </li>
            <li class="d_jump">— 礼品 —
                <div class="xiao">
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/78da4524339eaca2763fbc591a4fe3c1.png?thumb=1&w=120&h=120" alt="">
                        <p>送女生</p>
                    </div>
                    
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/58becaea14744c9ec2d0f576a7413395.png?thumb=1&w=120&h=120" alt="">
                        <p>送男生</p>
                    </div>
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/72579bfcba9ce6f0792e878fa9bcd75c.png?thumb=1&w=120&h=120" alt="">
                        <p>新品</p>
                    </div>
                </div>
            </li>
            <li class="d_jump">— 生活 —
                <div class="xiao">
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/fbc14b5b4f7c06b53e1e70af21c5784a!120x120.png" alt="">
                        <p>牙刷</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/a64248bdf432d800166d6e7903f24bcd!120x120.png" alt="">
                        <p>沙发</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/a1/pms_1481881674.9521847!120x120.jpg" alt="">
                        <p>毛巾</p>
                    </div>
                </div>
            </li>
            <li class="d_jump">— 米粉卡 —
                <div class="xiao">
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/f1c689466a6d309a7dd3d0215c734846!120x120.png" alt="">
                        <p>日租卡</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/ee289a60160dd1e7fce6c55bc89c30c1!120x120.png" alt="">
                        <p>月租卡</p>
                    </div>
                    <div>
                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ceaba659be7a72f8da989c5d85a39c9.jpg?thumb=1&w=120&h=120" alt="">
                        <p>吃到饱</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/f1c689466a6d309a7dd3d0215c734846!120x120.png" alt="">
                        <p>任我行</p>
                    </div>
                </div>
            </li>
            <li class="d_jump">— 零售店 —
                <div class="xiao">
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/36e61899896b5e7609e4bbc32b0471e3!120x120.png" alt="">
                        <p>小米之家</p>
                    </div>
                    
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/44bf50a768761446ef32c83c0f9eeea1!120x120.png" alt="">
                        <p>服务网点</p>
                    </div>
                    <div>
                        <img src="//i8.mifile.cn/b2c-mimall-media/e241b4ca0c5ad159abd1c6df274df0c6!120x120.png" alt="">
                        <p>零售网点</p>
                    </div>
                    
                </div>
            </li>
        </ul>
        <!-- 左侧-基于element-ui的step组件封装 -->
        <!-- <div class="step">
            <left-step :steps="steps"></left-step>
        </div> -->
        <ul id="step" >
            <li class="do" v-for="(item,index) in steps.step" @click="ind(index)" >{{item.title}}</li>
        </ul>
        </div>
</div>
</template>
  
<script>
import leftSteps from './public/steps.vue'
export default {
name: 'sort',
data () {
    return {
        steps: {
            active: 0,
            step: [
            {title: '新品'},
            {title: '手机'},
            {title: '电视'},
            {title: '电脑'},
            {title: '家电'},
            {title: '路由'},
            {title: '智能'},
            {title: '电源'},
            {title: '耳机'},
            {title: '音箱'},
            {title: '礼品'},
            {title: '生活'},
            {title: '米粉卡'},
            {title: '零售店'},
            ]
        },
        
    }
},
mounted: function () {
    var d1 = document.querySelectorAll('#step li')[0]; 
    console.log(d1);
    
    d1.style.cssText = 'color:#fb7d34;font-size:1.2rem'
    window.onscroll = function(){
        var top = document.documentElement.scrollTop;
        let height = document.documentElement.clientWidth;
        // console.log(top);
        var num = Math.floor(top/height);
        // console.log(num);
        
        var d = document.querySelectorAll('#step li')[num]; 
        
        
        var aArr = document.querySelectorAll('#step li');
        for(var i=0;i<aArr.length;i++){
            if(i==num){
                d.style.cssText = 'color:#fb7d34;font-size:1.2rem'
            }else{
                aArr[i].style.cssText = '';
              
            } 
        }
    }
},
methods: {
    back(){
        window.history.back();
    },
    ind(num){
        // console.log(num);
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        let height = document.documentElement.clientWidth;
        window.scrollTo(0,height*num);
        // console.log(scrolled);

        var d = document.querySelectorAll('#step li')[num]; 
        var aArr = document.querySelectorAll('#step li');
        for(var i=0;i<aArr.length;i++){
            if(i==num){
                d.style.cssText = 'color:#fb7d34;font-size:1.2rem'
            }else{
                aArr[i].style.cssText = ''
            } 
        }
    
    },

},

computed: {},
components: {
    // 'left-step': leftSteps
}
}
</script>
  
<style scoped>
#sort{
    height: 100vh;
    width: 100vw;
    
}
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
#fan{
    padding-left: 4vw;
}
#sou{
    padding-right: 4vw;
    color: gray;
}

.main-body {
    margin-top: 12vw; 
    padding-left: 25vw;
    background-color: #ffffff;
}
.d_jump {
    height: 100vw;
    font-size: 30px;
    color: #333;
    background-color: #e4e4e4;
    text-align: center;
    
}
#step {
  width: 25vw;
  margin: 0;
  padding: 0;
  position: fixed;
  background-color: #fefefe;
  top: 12vw;
  left: 0;
  border-right: 1px solid #eee;
  height: 80vh;
  overflow: scroll;
  border-right: 1px solid gray;
}
#step li{
    
    list-style: none;
  text-align: center;
  padding-top: 1.5rem;
  font-size: 4vw;
}
/* #step li:nth-of-type(1){
    color:#fb7d34;
    font-size:1.2rem
} */
#home{
    margin-top: 12vw;
}
#da {
    list-style: none;
    width: 75vw;
}
#da li {
    width: 75vw;
    background-color: #ffffff;
    font-size: 5vw;;
}
.da{
    width: 100%;
    height: 20vw;
}
.xiao{
    margin-top:10vw; 
    font-size: 2vw;
}
.xiao div{
    float: left;
    width: 25vw;
}
.xiao div img{
    width: 20vw;
    height: 20vw;
}

</style>
