<template>
  <div class="index">
   
    <div class="mid">
      <router-view></router-view>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>


import baseHeader from "../publicCom/baseHeader";
import baseFooter from "@/publicCom/baseFooter";

export default {
  name: "index",
  components: {
  
    baseHeader,
    baseFooter,
  },
  data() {
    return {
      
    };
  },
 
 
 
};
</script>

<style scoped>
/* .index {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100vh; */
/* } */ 
.mid {
  /* flex: 1; */
  overflow-y: auto;
  margin: 1rem 0;
}
</style>