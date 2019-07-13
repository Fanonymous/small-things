<template>
    <div class="wrapper">
        <div class="box">
            <span>首页</span>
            <span>购票</span>
            <span>商城</span>
            <span>发现</span>
            <span>我的</span>
        </div>
        <div class="common-operate">
            <span>PC版</span>|
            <span>客户端下载</span>|
            <span>意见反馈</span>|
            <span>帮助中心</span>
        </div>
        <div class="bg-box">
            <div class="bg-box-wrapper">
                <img src="../../assets/mtime.png" alt="">
                <span>营业执照</span>
            </div>
        </div>
        <div class="copyright-box">
            Copyright 2006-2019 Mtime.com Inc.All rights reserved.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
}
.box,.common-operate{
    text-align: center;
}
.box span{
    padding: 10px 5%;
    color: #1e7dd7;
    cursor: pointer;
    font-size: 16px;
}
.common-operate{
    padding-top: 10px;
    background-color: rgba(211,211,211,.3);
}
.common-operate span{
    padding: 5px 10px;
}
.bg-box{
    background-color: rgba(211,211,211,.3);
    text-align: center;
}
.bg-box-wrapper{
    position: relative;
    width: 175px;
    margin: 0 auto;
    height: 50px;
}
.bg-box-wrapper img{
    display: inline-block;
    width: 110px;
    height: 50px;
    position: absolute;
    left: 0;
}
.bg-box-wrapper span{
    color: #fff;
    background-color: #D3D3D3;
    padding: 5px 10px;
    top: 11px;
    position: absolute;
    right: 0;
}
.copyright-box{
    font-size: 13px;
    text-align: center;
    padding: 5px 0;
    color: #C0C4CC;
}
</style>

