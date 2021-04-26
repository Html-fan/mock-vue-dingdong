<template>
  <div class="footer">
    <van-tabbar
      v-model="active"
      active-color="orange"
      inactive-color="black"
      fixed
    >
      <van-tabbar-item
        v-for="(item, index) in biaoqian"
        :key="index"
        replace
        :to="item.path"
        :icon="item.icon"
        >{{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "baseFooter",
  data() {
    return {
      active: 0,
      biaoqian: [
        {
          name: "首页",
          path: "/home",
          icon: "wap-home-o",
        },
        {
          name: "分类",
          path: "/fenlei",
          icon: "apps-o",
        },
        {
          name: "星球",
          path: "/xingqiu",
          icon: "star-o",
        },
        {
          name: "购物车",
          path: "/cart",
          icon: "shopping-cart-o",
        },
        {
          name: "我的",
          path: "/user",
          icon: "friends-o",
        },
      ],
    };
  },
  methods: {},
   mounted() {
      /* 直接在tabbar组件页面监听，判断当前页面是哪个页面,
      解决刷新时,tab默认为 0 的bug */
      const navBarActive = window.location.hash
      if (navBarActive.includes('#/home')) {
        this.active = 0
      } else if (navBarActive.includes('#/fenlei')) {
        this.active = 1
      } else if (navBarActive.includes('#/xingqiu')) {
        this.active = 2
      } else if (navBarActive.includes('#/cart')) {
        this.active = 3
      }else if (navBarActive.includes('#/user')) {
        this.active = 4
      }
    },
};
</script>

<style scoped>
.van-hairline--top-bottom {
  height: 1rem;
  background: #ccc;
}
</style>