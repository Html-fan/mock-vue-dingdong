<template>
  <div>
      <button @click="back()">退出登录</button>
  </div>
</template>

<script>
  export default {
    methods: {
      back(){
        localStorage.removeItem("token")
        this.$router.push({
          path:"/home"
        })
      }
    },
  }
</script>

<style scoped>

</style>