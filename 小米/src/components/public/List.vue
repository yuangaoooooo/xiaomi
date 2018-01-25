<template>
        <div class="sort">
          <header-bar>分类</header-bar>
          <main>
            <ul>
              <li v-for="(good,index) in goodList"><a :href="'#'+good.id" @click="isActive(index+2)">{{good.name}}</a></li>
            </ul>
            <div class="detail">
              <div :id="good.id" v-for="good in goodList" class="font">
                -{{good.name}}-
                <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9697e47fba19edeeb0439ed30827afff.jpg?thumb=1&w=500&h=200" alt="">
              </div>
            </div>
          </main>
          <!--<foot-bar></foot-bar>-->
        </div>
      </template>
      
      <script>
        import HeaderBar from '../components/HeaderBar'
        // import FootBar from '../components/FootBar'
        export default {
          name: "Sort",
          components:{
            HeaderBar,
            // FootBar
          },
          mounted:function(){
            document.getElementsByTagName('a')[2].style.cssText = 'color:#fb7434;font-size:1.2rem'
          },
          methods:{
            isActive:function(index){
              var ind = document.getElementsByTagName('a')[index];
              var aArr = document.getElementsByTagName('a');
              for(var i=0;i<aArr.length;i++){
                if(i==index){
                  ind.style.cssText = 'color:#fb7d34;font-size:1.2rem'
                }else{
                  aArr[i].style.cssText = ''
                }
              }
            }
          },
          data(){
            return{
              goodList:[
                {name:'新品',id:'new'},
                {name:'手机',id:'phone'},
                {name:'电视',id:'tv'},
                {name:'电脑',id:'computer'},
                {name:'家电',id:'electric'},
                {name:'路由',id:'route'},
                {name:'智能',id:'intelligence'},
                {name:'电源',id:'power'},
                {name:'耳机',id:'headset'},
                {name:'音箱',id:'box'},
                {name:'礼品',id:'gift'},
                {name:'生活',id:'lift'},
                {name:'米粉卡',id:'card'},
                {name:'零售店',id:'sail'},
              ]
            }
          }
        }
      </script>
      
      <style scoped>
      div{
        margin: 0;
        padding: 0;
        width: 80px;
      }
      .sort{
        width: 100%;
      }
      ul{
        width: 80px;
        margin: 0;
        padding: 0;
        position: fixed;
        background-color: #fefefe;
        top: 50px;
        border-right: 1px solid #eee;
        height: 80vh;
        overflow: scroll;
      }
      ::-webkit-scrollbar{
        width: 1px;
      }
      li{
        list-style: none;
        text-align: center;
        padding-top: 1.5rem;
        font-size: 0.9rem;
      }
      a{
        text-decoration: none;
        color: black;
      }
      .detail{
        width: 290px;
        position: fixed;
        top: 50px;
        left: 80px;
        height: 90vh;
        overflow: auto;
      }
      .font{
        width: 290px;
        text-align: center;
         font-size: 1rem;
       }
      img{
        display: block;
        width: 290px;
        height: 250px;
      }
      </style>
      