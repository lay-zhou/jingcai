<template>
<div class="home">
  <keep-alive>
    <router-view name="gamePage"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="userPage"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="jfShop"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="myTeam"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="myBusiness"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="service"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="recharge"></router-view>
  </keep-alive>
  <keep-alive>
    <router-view name="myshare"></router-view>
  </keep-alive>
</div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>