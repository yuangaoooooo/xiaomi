<template>
    <div class="index">    
        <div class="nav">
            <div class="logo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt=""></div>
            <div class="sou"><router-link to="/index/three/search"><span class="fa fa-search"></span>搜索商品名称</router-link></div>
            <div class="me"><router-link to="/me"><span class="fa fa-user-o"></span></router-link></span></div>
        </div>
        
        <!-- <tab class="sortlist" active-color="#ff6b00">
            <tab-item id="kuai"   @on-item-click=""  v-for="(item,index) in sortList">{{item}}</tab-item>
        </tab> -->
        <div class="sortlist">
            <ul>
                <li>
                    <div id="kuai" v-for="(item,index) in sortList" @click="on(index)">
                        <router-link :to="'/index/'+item.id">{{item.title}}</router-link>
                    </div>
                </li>
            </ul>
        </div>
        
       
        
            <div class="main">
                <transition :name="animateType" mode="">
                    <router-view></router-view>
                </transition>
            </div>
        
       
    </div>
</template>

<script>
    
export default {
    name:'index',
    components: {
        
    },
    data(){
        return {
            sortList:[
                {title:'推荐',id:"tj"},
                {title:'手机',id:"sj"},
                {title:'智能',id:"zn"},
                {title:'电视',id:"ds"},
                {title:'电脑',id:"dn"},
                {title:'全面屏',id:"qmp"},
                {title:'周边',id:"zb"},
                // {title:'衣服',id:"yf"},
                // {title:'MIUI',id:"mu"},
                {title:'盒子',id:"hz"},
                {title:'艺术',id:"ys"}
            ],
            animateType:''
        }
    },
    mounted () {
        var d1 = document.querySelectorAll('#kuai')[0]; 
        var d2 = document.querySelectorAll('#kuai a')[0]; 
        // console.log(d1);
        
        d1.style.cssText = 'border-bottom: 2px solid #ff6b00;'
        d2.style.cssText = 'color:#ff6b00;'
    },
    methods:{
        on(num){
            var di = document.querySelectorAll('#kuai')[num]; 
            
            var aArri = document.querySelectorAll('#kuai');
            for(var i=0;i<aArri.length;i++){
                if(i==num){
                    di.style.cssText = 'border-bottom: 2px solid #ff6b00;'
                }else{
                    aArri[i].style.cssText = ''
                } 
            }

            var d = document.querySelectorAll('#kuai a')[num]; 
            var aArr = document.querySelectorAll('#kuai a');
            for(var i=0;i<aArr.length;i++){
                if(i==num){
                    d.style.cssText = 'color:#ff6b00;'
                }else{
                    aArr[i].style.cssText = ''
                } 
            }
        }
    },
    watch:{
        // 监听路由的变化
        $route(to,from){
        // console.log(to);
        // console.log(from);
        var toLevel = to.path.split('/').length;
        var fromLevel = from.path.split('/').length;
        // console.log('toLevel='+toLevel);
        // console.log('fromLevel='+fromLevel);
        var toL = to.path.length;
        var formL = from.path.length;
        // console.log(toL);
        // console.log(formL);
        
        if (toLevel==fromLevel) {
            // 平级切换     
            if ( toL > formL ) {
            this.animateType = 'out'
            }else{
            this.animateType = 'in'
            }
        }else if (toLevel>fromLevel) {
            // 进入下一级页面
            this.animateType = 'in'
        }else{
            // 返回上一页
            this.animateType = 'out'
        }
        
        
        }
    }
    
}
</script>

<style scoped>
.nav{
    width: 100vw;
    height: 14vw;
    background-color: #f2f2f2;
    position: fixed;
    top:0;
    left: 0;
    z-index: 1000;
}

.logo{
    height: 14vw;
    width: 15%;
    float: left;
    text-align: center;
    margin: 0;
}
.logo img{
    width: 7vw;
    height: 5vw;
    margin-top: 4.5vw;
}
.sou{
    margin-top: 2vw;
    height: 10vw;
    width: 70%;
    background-color: white;
    float: left;
    box-sizing: border-box;
    line-height: 10vw;
    font-size: 4vw;
    color: gray;
}
.sou span{
    margin: 1vw;
}
.sou a{
    color: gray;
}
.me{
    height: 14vw;
    width: 15%;
    float: left;
    text-align: center;
    line-height: 15vw;
    font-size: 6vw;;
}
.me a{
    color: gray;
}
.sortlist{
    width: 100vw;
    height: 12vw;
    line-height: vw;
    font-size: 2vw;
    background-color: #f2f2f2;
    overflow: scroll;
    white-space: nowrap;  
    position: fixed;
    top:14vw;
    left: 0;
    z-index: 1000;
}
#kuai{
    display: inline-block;
    text-align: center;
    font-size: 3.5vw;
    width: 10vw;
    height: 10vw;
    line-height: 12vw;
    margin: 0 2vw;
}
#kuai a{
    color: gray;
}
.main{
    margin-top: 26vw;
    margin-bottom: 50px;
}


/* 平级切换 */
.level-enter, .level-leave{
  position: absolute;
}
/* 出去 */
.out-enter{
  transform: translateX(-100%);
}
.out-leave-to{
  transform: translateX(100%)
}
.out-enter-active, .out-leave-active{
  transition: all 1s;
  position: absolute;
}
/* 进入 */
.in-enter{
  transform: translateX(100%);
}
.in-leave-to{
  transform: translateX(-100%);
}
.in-enter-active, .in-leave-active{
  transition: all 1s;
  position: absolute;
}

</style>