<template>
    <div class="mtime-header">
        <div class="left" @click="reback">
            <i class="fa fa-angle-double-left"></i>
        </div>
        <div class="imgbox">
            <img src="../../assets/mtime.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        reback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
.mtime-header{
    width: 100%;
    height:60px;
    background:#1c2635;
    display:flex;
    .imgbox{
        flex-grow: 1;
        img{
            height: 60px;
            margin: 0 auto;
        }
    }
}
.left{
    width: 50px;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
}
.left i{
    margin-left: 20px;
    cursor: pointer;
}
</style>
