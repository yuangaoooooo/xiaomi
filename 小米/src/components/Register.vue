<template>
    <div id="register">
        <div class="logo">
            <img src="../assets/images/mi-logo.png" alt="">
            <p>注册小米账号</p>
        </div>
        <form>
            <!-- <h4>名字:</h4> -->
            <input type="text" id="name" placeholder="名字">
            <h4></h4>
            <!-- <h4>密码:</h4> -->
            <input type="password" id="psw" placeholder="密码">
            
            <button id="b1">立即注册</button>
            <p>
                注册账号即表示您同意并愿意遵守小米的
                <a href="">用户协议</a>和
                <a href="">隐私政策</a>
            </p>

        </form>
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
        name:"register"
    }
</script>
<style scoped>
#register{
    padding: 20px 15px;
    color: gray;
    height:100vh;
}
.logo{
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}
form{
    text-align: left;
}
form input{
    border-radius: 20px;
}

#name,#psw,#b1{
    height: 40px;
    width: 90vw;
}
#name,#psw{
    margin-bottom: 20px;
}
#b1{
    border-radius: 20px;
    background-color: #33b4ff;
}
footer{
    width: 90%;
    text-align: center;
    position: absolute;
    bottom: 10px;    
}
</style>