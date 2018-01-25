<template>
        <div class="second">
            <header>
                second
            </header>
            <!-- 返回上一级页面 -->
            <button @click="back">返回WeChat界面</button>
            <button @click="$router.back()">返回上一页</button>

            <router-link to="/wechat">返回wechat</router-link>
        </div>
    </template>
    
    <script>
        export default {
            name:'second',
            methods: {
                back(){
                    window.history.back();
                }
            }
        }
    </script>
    
    <style scoped>
    header{
        width: 100%;
        height: 64px;
        line-height: 80px;
        text-align: center;
        font-size: 26px;
        background-color: lightcoral;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .second{
        background: palevioletred;
        width: 100%;
        height: 100vh;
    }
    </style>