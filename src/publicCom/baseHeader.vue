<template>
  <div class="baseHeader">
    <van-nav-bar fixed>
      <slot slot="left" name="left"></slot>
      <slot slot="title" name="title"></slot>
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "baseHeader",
 
  
};
</script>

<style scoped>
.baseHeader >>> .van-nav-bar {
  height: 1rem;
  
}
.baseHeader >>> .van-nav-bar__content {
  height: 100%;
  font-size: .3rem;
  
}
</style>