<template>
    <div class="news">
        <header>
            <router-link to="/me/three/login">
                <div class="tx"></div>
                <span>登录/注册</span>
            </router-link>
        </header>
        <main>
            <group class="g1">
                <cell title="我的订单" value="全部订单" is-link="trun"></cell>
                <cell >
                    <div>
                        <p id="icon" class="fa fa-money"></p>
                        <p>代付款</p>
                    </div>
                    <div>
                        <p id="icon" class="fa fa-truck"></p>
                        <p>待收货</p>
                    </div>
                    <div>
                        <p id="icon" class="fa fa-wrench"></p>
                        <p>退休换</p>
                    </div>
                </cell>   
            </group>
            <group class="g2">
                <cell title="会员福利" is-link="trun" >
                    <img slot="icon" src="../assets/images/2.png" alt="">
                </cell>
                <cell title=" 我的优惠" is-link="trun">
                        <img slot="icon" src="../assets/images/3.png" alt="">
                </cell>
            </group>
            <group class="g2">
                <cell title="服务中心" is-link="trun">
                        <img slot="icon" src="../assets/images/4.png" alt="">
                </cell>
                <cell title="小米之家" is-link="trun">
                        <img slot="icon" src="../assets/images/0.png" alt="">
                </cell>
            </group>
            <group class="g2">
                <cell title="F码通道" is-link="trun">
                        <img slot="icon" src="../assets/images/5.png" alt="">
                </cell>
            </group>
            <group class="g2">
                <cell title="设置" is-link="trun">
                        <img slot="icon" src="../assets/images/9.png" alt="">
                </cell>
            </group>
        </main> 
    </div>
</template>

<script>
    import {Group,Cell} from 'vux'
    export default {
        name:'me',
        components:{
            Group,Cell
        }
    }
</script>

<style scoped>
header{
    width: 100vw;
    height: 20vw;
    background: url("http://m.mi.com/static/img/bg.63c8e19.png");
    background-color: #f37d0f;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    line-height: 25vw;
    /* position: relative; */
}
.tx{
    width: 17vw;
    height: 17vw;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAYAAADn/TAIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODExODIyQUM5MEYyMEIxODZDMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozN0ZCQzQ3MDhFQ0YxMUU2ODQ4MEQ5MDc1Rjg2RDMxNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozN0ZCQzQ2RjhFQ0YxMUU2ODQ4MEQ5MDc1Rjg2RDMxNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwMDIxOTQyLTg5YmEtNGU5YS1iOWE4LTMyYzUyODE3NzFlYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjllZTY4OTUxLWQ0YzctMTE3OS04YmQyLThi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");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    margin: 1.5vw;
    margin-left: 3vw;
}
header span{
    position: absolute;
    left: 25vw;
    top: -2vw;
    font-size: 4vw;
    color: white;
}
main{
    margin-top: 20vw;
    margin-left: 0;
    width: 100%;
}
.g1 .weui-cell:nth-child(1){
    height: 12vw;
    font-size: 4vw;
}
.g1 .weui-cell:nth-child(2){
    height: 25vw;
    padding: 0;
}
.g1 .weui-cell:nth-child(2) div{
    width: 33.333vw;
    height: 25vw;
    float: left;
    /* background-color: red; */
    text-align: center;
    font-size: 4vw;
    line-height: 8vw;
    padding-top: 6vw;
}
#icon{
    font-size: 8vw;
}
.g2 .weui-cell{
    height: 7.5vw;
    font-size: 4vw;

}
.g2 .weui-cell__hd{
}
.g2 img{
    margin-top: 3vw;
    margin-right: 3vw;
    width: 8vw;
    height: 8vw;
    
}
</style>