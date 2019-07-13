<template>
  <div id="app">
      <MtimeHeader></MtimeHeader>
      <router-view></router-view>
  </div>
</template>

<script>
import MtimeHeader from "@/components/Header"
export default {
  components:{
    MtimeHeader
  },
  mounted() {
      this.$router.push({path:'/login'})
  }
}
</script>

<style lang="scss" scoped>

</style>


