<template>
  <div>
    <baseHeader>
      <div slot="left" @click="back" class="left_text">
        <i class="van-icon van-icon-arrow-left"></i>
      </div>
      <div slot="right" @click="pathTxt" class="right_text">
        <van-icon name="question-o" />
      </div>
    </baseHeader>
    
  </div>
</template>

<script>
import baseHeader from "@/publicCom/baseHeader";

export default {
  name: "pdsno",
  components: {
    baseHeader,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    pathTxt() {
      window.location.href = "https://cn.account.xiaomi.com/helpcenter";
    },
  },
};
</script>

<style scoped>
.van-icon {
  font-size: 0.4rem;
  vertical-align: middle;
  color: black;
}
</style>