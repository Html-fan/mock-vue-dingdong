<template>
  <div class="home">
    <div class="header">
      <BaseHeader>
      <img slot="left" :src="imgLog" alt="" class="img_log" />
      <van-search
        slot="title"
        right-icon="scan"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
        <van-icon slot="right" name="manager-o" class="right_icon" />
        </BaseHeader>
    </div>
    <div class="banner">
      <!-- <LOADING v-show="isLoading"></LOADING> -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img class="img_ban" :src="item.banner_img_url" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="mid_con">
      <van-grid :column-num="5" :border="false">
        <van-grid-item
          v-for="(item, index) in midCon"
          :key="index"
          :icon="item.pimg"
          :text="item.pname"
        />
      </van-grid>
    </div>

    
      <ul class="newPro">
        <li v-for="(item, index) in newPro" :key="index" class="newPro_con">
          <div class="newPro_text">
            <span>{{ item.name }}</span>
            <p>{{ item.desc }}</p>
            <button class="btn">{{ item.but_con }}</button>
          </div>
          <img :src="item.imgUrl" alt="" class="newPro_img" />
          
        </li>
      </ul>
      <Jingxuan></Jingxuan>
      <ListPro></ListPro>
  </div>
</template>

<script>

// import LOADING from '../publicCom/LOADING'
import BaseHeader from '../publicCom/baseHeader'
import ListPro from '../publicCom/listPro'
import Jingxuan from '../publicCom/jingxuan'
export default {
  components: {
    // LOADING,
    BaseHeader,
    ListPro, Jingxuan },
  name: "home",
  data() {
    return {
      // isLoading:false,
      value: "",
      imgLog:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAATKADAAQAAAABAAAAMgAAAABQW5lOAAADMUlEQVRoBe2bPYgTQRTH/5NcFBU9ULQQtREUET3FQsXGyuLQRhDBxtqP4xBUsDsbQYRDPRGsBNsT4RoRVBA7PxpBQe1EPT/AIqJ3553J879JhjRmfS+3I9lkHmxmNvPftzO/vJmd3Z0A0UwEnBzHCwi2mo7KTjxHV3NwmK2lSR74we0Tt8naJkwdPqLAeo7hjXOsbUYmp7EEU3hLj6tVLgsYdXIsuwqoTjo/UZnwHnMbJ8AJN4bv83Enw1jHn+qd2ofDw4Ja3BnCfv68B1DFLVQwKSdwQU5h+f+sWt6ANdkIu1MV5/ALr+Uk9jYLwubyC8xzEawkuPsciw/7r0Km+QeW0BH08fOmDGEgJKzEd3cAS1oiWITfhCa8JAS07gFWh7QdQzgYkFcXRZinVMGwz4ZIuy3CwA65h1dN3US0DaLJYKk3h58cXnehhM/6g1KU0/TmsKy2VbCGyo3MD3A8GmS+P+XI1kXCXlPlXA240VrUfokNGG9Z3FW8bP90fz3Sw3/uS2UEC/AV+7l/mfDW+u/VqWA3tUGAdWSXdCOYdddxB0uxhQ1/oAblhQ47fTbrtCOB+Ua6iyijiKPcL/vvVKlgfajpRUcDS+C4a7WnFedVoJqiEs7wDiCAdTywRptvm9s+FeZKmQtgHM/e8+r5ygTN9TCwBqgnJmAIA8w6rVDVmU8ONlG4TSWuP2W9xyhKnrS2NocPnGJYbJVFrNUGAcaTj7Nxm7WV4FTzLLWXUvVCYDZbaJPr1KHGsMW60zdUAo3+m8kneD8SwEIBy76qwmerFhPeLQSw/AAr1N4sWRD0eIS52is4PTDp9S6pR+WVRZ/JMs1Pl7S22nGqG8C6F1gAWInLCMwINgKLwIwEjPIYYRGYkYBRHiMsAjMSMMpjhEVgRgJGeYywCMxIwCiPERaBGQkY5THCIjAjAaM8RlgEZiRglMcIi8CMBIzyGGFtAJtRHyPQarW6+qk1fp363L450z6TktrepgMzfVzHvI//DNuQ4rRZJHjW3EnNHeFLrh2pCl/o+P+NEib8bst0BZ5yofAhlv97dbVwHXUJd1v6ahS4K/jCJeqDVOuWqRfx6A+5CpLYo3H97gAAAABJRU5ErkJggg==",
      banner: {},
      midCon: {},
      newPro: [
        {
          id: "1",
          imgUrl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a1e880c5761f22c869a9692c129b58a.jpg",
          name: "小米电视EA",
          desc: "预售价999起",
          but_con: "立即预订",
        },
        {
          id: "2",
          imgUrl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/45b074605784bea51b2fdb38ff4d66db.jpg",
          name: "MIX FOLD",
          desc: "4.20开售",
          but_con: "立即查看",
        },
       
      ],
    };
  },
  async mounted() {
    let res = await this.axios({
      method: "get",
      url: "http://jx.xuzhixiang.top/ap/api/bannerlist.php",
      params: {
        uid: 51306,
      },
    });
    console.log(res.data.data);
    this.banner = res.data.data;
    let res1 = await this.axios({
      method: "get",
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: {
        uid: 51307,
      },
    });
    this.midCon = res1.data.data;
    this.midCon.sort((a, b) => {
      return a.pid - b.pid;
    });
  },
};
</script>

<style scoped>

.header >>> .van-nav-bar {
  background: #f2f2f2;
}
.img_log {
  height: 0.33rem;
  width: 0.5rem;
}
.right_icon {
  font-size: 0.38rem;
  color: grey;
}
.header >>> .van-nav-bar__title {
  max-width: 100%;
  width: 80%;
}
.header >>> .van-search {
  background-color: #f2f2f2;
  height: 0.5rem;
}
.header >>> .van-cell {
  background-color: #fff;
  padding-left: 5px;
}
.header >>> .van-icon {
  color: gray;
}
.header >>> .van-search__content {
  background-color: #f2f2f2;
}


.banner {
  border-bottom: 1px solid gray;
  width: 100%;
  height: 4rem;
}
.banner >>> .van-swipe__indicators {
  padding-bottom: 0.2rem;
}
.img_ban {
  width: 100%;
  height: 4rem;
}
.mid_con {
  width: 100%;
  height: 100%;
  text-align: center;
}
.mid_con >>> .van-icon__image {
  width: 100%;
  height: 100%;
}
.mid_con >>> .van-grid-item__text {
  margin-top: 0;
  color: black;
}
.mid_con >>> .van-grid-item__content {
  padding: 5px 5px;
}
.newPro{
  width: 95%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.newPro_con{
  width: 49%;
  height: 100%;
  font-size: .3rem;
  text-align: center;
  color: aliceblue;
  background: rgba(7, 7, 114, 0.507);
  /* margin-left: 5px; */
  border-radius: .2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}
.newPro_img{
  width: 1.5rem;
  height: 100%;
  border-radius: .2rem;

}
.btn{
  width: 1.2rem;
  font-size: .2rem;
  color:rgba(7, 7, 114, 0.671) ;
  border-radius: .2rem;
  border: none;
  margin-top: .2rem;

}
</style>