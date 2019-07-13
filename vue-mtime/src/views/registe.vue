<template>
    <div class="wrapper">
        <div class="regist-head">
            <div class="user-name">
                <span class="label">手机号：</span>
                <input type="text" placeholder="请输入手机号" style="border-bottom:1px solid #dcdfe6">
                <span class="get-code-but">获取验证码</span>
            </div>
            <div class="user-code">
                <span class="label">验证码：</span>
                <input type="text" style="border-bottom:1px solid #dcdfe6">
            </div>
            <div class="user-password">
                <span class="label">密&nbsp;&nbsp;&nbsp;码：</span>
                <input type="password" placeholder="6-20位字母、数字、符号组成">
            </div>
        </div>
        <div class="tip-mess">
            <div style="padding-left: 19px;">
                <span v-if="show" class="fa fa-circle-o" style="color:#39d03e;" @click="show=!show"></span>
                <span v-if="!show" class="fa fa-check-circle-o" style="color:#39d03e" @click="show=!show"></span>
                <span style="padding-left:5px;">我已阅读并同意</span>
                <span style="color:#1e7dd7">《Mtime时光网服务条款》《隐私政策》</span>
            </div>
        </div>
        <div class="regist-but">
            注册
        </div>
        <commonFooter style="position: absolute;top: 430px;"></commonFooter>
    </div>
</template>

<script>
import commonFooter from "@/components/Footer"
export default {
    components : {
        commonFooter
    },
    data() {
        return {
            show : true
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    position: relative;
}
.user-name input,.user-password input, .user-code input{
  border: none;
  line-height: 50px;
  font-size: 18px;
  width: 70%;
}
.label{
    font-size: 18px;
    padding-left: 20px;
}
.user-name{
    position: relative;
}
.get-code-but{
    position: absolute;
    font-size: 18px;
    right: 20px;
    border: 1px solid #1e7dd7;
    padding: 5px 10px;
    border-radius: 15px;
    top: 8px;
    cursor: pointer;
    color:#1e7dd7;
}
.tip-mess{
    font-size: 18px;
    margin-top: 5px;
}
.regist-but{
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: #1e7dd7;
    margin: 20px;
    font-size: 20px;
    color: #Fff;
    border-radius: 25px;
    cursor: pointer;
}
</style>



