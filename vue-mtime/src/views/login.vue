<template>
    <div class="userlogin">
          <div class="user-head">
              <div class="user-name">
                  <span class="fa fa-user-o login-icon"></span>
                  <input type="text" placeholder="登录邮箱/手机号码" style="border-bottom:1px solid #dcdfe6">
              </div>
              <div class="user-password">
                  <span class="fa fa-lock login-icon" style="font-size: 26px;"></span>
                  <input :type="type" placeholder="密码" value>
                  <span class="show-password" @click="showPass">显示密码</span>
              </div>
          </div>

          <div class="login-footer">
              <div class="longin-button">登录</div>
              <div class="login-regist">
                <span style="color:#1e7dd7;font-weight: bold;left:24px;" @click="toRegist">免费注册</span>
                <span style="right:24px;" @click="toFind">找回密码</span>
              </div>
              <div class="divide-line">
                  <div class="left-line"></div>
                  <span>使用第三方登录</span>
                  <div class="right-line"></div>
              </div>
              <div class="party-icon">
                  <img src="../assets/weibo.png" alt="微博">
                  <img src="../assets/qq.png" alt="QQ">
              </div>
          </div>
          
    </div>
</template>

<script>
export default {
    data() {
        return {
            type : 'password'
        }
    },
    methods : {
        toRegist() {
            this.$router.push({path:'/registe'})
        },
        toFind() {
            this.$router.push({path:'/findPassword'})
        },
        showPass() {
            if (this.type == 'password') {
                this.type = 'text'
            }else {
                this.type = 'password'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.userlogin{
    position: relative;
}
.user-name input,.user-password input{
  border: none;
  line-height: 50px;
  font-size: 18px;
  width: 85%;
}
.login-icon{
  font-size: 20px;
  padding-left: 20px;
  padding-right: 10px;
}
.user-name{
  margin-top: 5px;
}
.user-password{
  position: relative;
}
.show-password{
  position: absolute;
  right: 30px;
  top: 15px;
  color: #1e7dd7;
  cursor: pointer;
}
.login-footer{
  margin-top: 2px;
  border-top: 4px solid #dcdfe6;
}
.longin-button{
  height: 50px;
  background-color: #1e7dd7;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin: 20px;
  border-radius: 15px;
}
.login-regist{
    font-size: 18px;
    position: relative;
    height: 40px;
    span{
        position: absolute;
        cursor: pointer;
    }
}
.divide-line{
    position: relative;
    text-align: center;
    color: #C0C4CC;
}
.divide-line div{
    display: inline-block;
    border-top: 1px solid #dcdfe6;
    width: 30%;
    vertical-align: middle;
}
.party-icon{
    text-align: center;
    margin-top: 10px;
}
.party-icon img{
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-right: 20px;
}
</style>


