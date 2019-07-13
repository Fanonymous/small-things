<template>
    <div class="wrapper">
        <div class="head">
            <div class="box">
                <div class="first-row">
                    <span>通过手机号找回密码</span>
                    <span class="link-but">></span>
                </div>
                <div class="second-row">
                    <span>通过邮箱找回密码</span>
                    <span class="link-but">></span>
                </div>
            </div>
        </div>
        <commonFooter style="position: absolute;top: 410px;"></commonFooter>
    </div>
</template>

<script>
import commonFooter from "@/components/Footer"
export default {
    components : {
        commonFooter
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    position: relative;
}
.head{
    border-bottom: 1px solid #C0C4CC;
}
.box{
    width: 90%;
    margin: 0 auto;
    font-size: 18px;
    margin-top: 20px;
}
.box div{
    height: 50px;
    line-height: 50px;
    position: relative;
}
.first-row{
    border-bottom: 1px solid #dcdfe6;
}
.link-but{
    padding: 0 10px;
    position: absolute;
    right: 10px;
    color: #C0C4CC;
    cursor: pointer;
}
</style>


