<template>
    <div id="login">
        <div class="logo">
            <img src="../assets/images/mi-logo.png" alt="">
            <p>小米账号登录</p>
        </div>
        <form action="">
            <div class="mk1" v-if="mokuai1">
                <input class="in1"  type="text" placeholder="邮箱/手机号码/小米ID"><br>
                <input class="in2"  type="password" placeholder="密码 "><br>
                <span class="fa fa-eye eye"></span>
            </div>
            <div class="mk2" v-if="mokuai2">
                <div class="q86">+86</div>
                <input class="in1-2"  type="text" placeholder="手机号码"><br>
                <input class="in2"  type="password" placeholder="短信验证码"><br>
                <div class="yan"><a href="javascrpt:;">获取验证码</a></div>
            </div>
            <button class="b1">登录</button><br>
            <button class="b2" v-if="mokuai1" @click="mokuai1=!mokuai1;mokuai2=!mokuai2">手机短信登录/注册</button>
            <button class="b2" v-if="mokuai2" @click="mokuai1=!mokuai1;mokuai2=!mokuai2">用户名密码登录</button>
        </form>
        
        <fieldset>
            <legend align="center">其他登录方式</legend>
            <div class="tu" align="center">
            <a href="#"  >
                <div class="imgdiv1"><img src="../assets/images/iconstype_wap.png" alt="" class="img1"></div>
            </a>
            <a href="#"  >
                <div class="imgdiv2"><img src="../assets/images/iconstype_wap.png" alt="" class="img2"></div>
            </a>
            <a href="#"  >
                <div class="imgdiv3"><img src="../assets/images/iconstype_wap.png" alt="" class="img3"></div>
            </a>
            <a href="#"  >
                <div class="imgdiv4"><img src="../assets/images/iconstype_wap.png" alt="" class="img4"></div>
            </a>
            </div>
        </fieldset>
        <p class="wangji" v-show="mokuai1">
            <router-link to="/me/three/register">
                <a href="">注册账号</a> 
            </router-link>  |
            <a href="">忘记密码？</a>
        </p>
        <footer>
           <a href="">中文简体</a>
            <a href="">English</a> |
            <a href="常见问题"></a>
            <span>隐私政策</span>
            <p>小米公司版权所有</p>
        </footer>
    </div>
</template>
<script>
    export default{
        name:"login",
        data () {
            return {
                mokuai1:true,
                mokuai2:false
            }
        }

    }
</script>
<style lang="">
#login{
    padding: 50px 10% 0 10%;
}
.logo{
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}
form{
    text-align: center;
    
}
form input{
    width: 100%;
    height: 45px;
    border: none;
    font-size: 18px;
    padding-left: 10px;
    box-sizing: border-box;
}
.mk1,.mk2{
    position: relative;
}
.eye{
    position: absolute;
    bottom: 16px;
    right: 30px;
}
.yan{
    position: absolute;
    bottom: 0px;
    right: 30px;
    text-align: center;
    line-height: 43px;
    border-left: 2px solid #f2f2f2;
    height: 43px;
    padding-left: 15px;
}
.in1{
    border-bottom:2px solid #f2f2f2; 
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.in1-2{
    width: 80%;
    float: right;
    border-bottom:2px solid #f2f2f2; 
    border-top-right-radius: 20px;
}
.q86{
    width: 20%;
    height: 43px;
    background-color: #ffffff;
    position: absolute;
    border-top-left-radius: 20px;
    border-bottom: 2px solid #f2f2f2;
    border-right: 2px solid #f2f2f2;
    line-height: 45px;
}
.in2{
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    
}
.b1,.b2{
    width: 100%;
    height: 45px;
    border-radius: 20px;
    font-size: 18px;
    border: none;
}
.b1{
    margin-top: 20px;
    background-color: #33b4ff;
    margin-bottom: 20px;
}
.b2{
    background-color: #ffffff;
    color: black;
    margin-bottom: 20px;
}
.wangji{
    text-align: center;
    margin-top: 20px;
    
}
.wangji a{
    color: gray;
}
fieldset{
    border: none;
    border-top: dotted 2px black; 
}
.tu{
    width: 80vw;
    height: 80px;
    margin: 0 auto;
  
}
.tu div{
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 3vh 2vw;
    background-color: #33b4ff;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
}
a{
    text-decoration: none;
}
.img1{
    position: relative;
    height: 40px;
    width: 200px;
    left: 0px;
    top: 3px;
}
.img2{
    position: relative;
    height: 40px;
    width: 200px;
    left: -50px;
    top: 3px;
}
.img3{
    position: relative;
    height: 40px;
    width: 200px;
    left: -95px;
    top: 3px;
}
.img4{
    position: relative;
    height: 40px;
    width: 200px;
    left: -150px;
    top: 3px;
}
.tu div:hover{
    background-color:#3384ff; 
}
footer{
    width: 90%;
    text-align: center;
    position: absolute;
    bottom: 10px;    
}
</style>