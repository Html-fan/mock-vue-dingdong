<template>
  <div class="user">
    <BaseHeader>
      <div slot="title">我的</div>
    </BaseHeader>
    <div @click="login">{{}}</div>
  </div>
</template>

<script>
  import BaseHeader from '../publicCom/baseHeader'
export default {
  name:"user",
  components: { BaseHeader },
  data() {
    return {
      
    }
  },
  methods: {
    login(){
       
    
    }
  },
  }
</script>

<style scoped>
.user{
  font-size: 20px;
}

</style>