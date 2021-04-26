<template>
  <div class="listPro">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="到底了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <ul
        class="list"
        v-masonry
        transition-duration="0.3s"
        item-selector=".list_con"
        gutter=".gutter-sizer"
      >
        <li
          v-for="(item, index) in list"
          :key="index"
          v-masonry-tile
          class="list_con"
        >
          <img :src="item.pimg" alt="" class="list_img" />
          <div class="list_text">
            <div class="list_name">{{ item.pname }}</div>
            <div class="list_desc">{{ item.pdesc }}</div>
            <p class="list_price">￥{{ item.pprice }}</p>
          </div>
        </li>
        <div class="gutter-sizer"></div>
      </ul>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "listPro",
  data() {
    return {
      list: [],
      error:false,
      loading: false,
      finished: false,
    };
  },
  mounted() {},

  methods: {
    async onLoad() {
      try {
        let res = await this.axios({
          method: "get",
          url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
          params: {
            uid: "50313",
          },
        });
        // console.log(res);
        this.list = res.data.data;
        this.loading = false
        // this.list.forEach((v)=>{

        // })
        if (this.list.length >= res.data.data.length) {
          this.finished = true;
        }
      } catch (err) {
        this.loading = false;
        this.error = true;
        console.log(err+"(网络错误)");
      }
    },
  },
};
</script>

<style scoped>
.listPro {
  width: 95%;
  margin: 0.2rem auto;
  /* background: lightcoral; */
}
.list_con {
  width: 48%;
  min-height: 3rem;
  background: #ccc;
  margin-top: 0.25rem;
  border-radius: 0.2rem;
  text-align: center;
  border: 1px solid #ccc;
}
.list_img {
  width: 100%;
  /* height: 50%; */
  border-radius: 0.2rem 0.2rem 0 0;
}
.list_text {
  font-size: 0.28rem;
  width: 80%;
  margin: 0.1rem auto;
  text-align: left;
}

.gutter-sizer {
  width: 3%;
}
.list_price,
.list_name {
  font-weight: 600;
}
.list_desc {
  font-size: 0.25rem;
  /* overflow: hidden;
    white-space: nowrap;
    -webkit-line-clamp:2;
    text-overflow:ellipsis; */
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0.1rem 0;
}
</style>