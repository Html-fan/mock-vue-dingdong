<template>
  <div class="register">
    <baseHeader>
      <div slot="left" @click="back" class="left_text">{{ leftText }}</div>
      <div slot="right" @click="pathTxt" class="right_text">
        <van-icon name="question-o" />
      </div>
    </baseHeader>
    <div class="reg_con">
      <div class="reg_txt">注册小米帐号</div>
      <van-field
        readonly
        clickable
        is-link
        :value="value"
        placeholder="北京市"
        @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          :columns-num="2"
          @confirm="onConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
      <div class="text_con">成功注册后,地区将不能更改</div>
      <van-cell-group>
        <van-field v-model="username" label="+86" placeholder="请输入手机号" />
      </van-cell-group>
      <div class="text_con1" ref="user"></div>
      <van-cell-group>
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <div class="text_con3" ref="pass"></div>
      <van-button type="primary" block @click="regNow(username, password)"
        >立即注册</van-button
      >
      <div class="text_con2">
        已阅读并同意:<a
          href="https://static.account.xiaomi.com/html/agreement/user/zh_CN.html"
          >小米用户协议</a
        >和<a href="https://privacy.mi.com/miaccount/zh_CN/">隐私政策</a>
      </div>
    </div>
  </div>
</template>

<script>
import baseHeader from "@/publicCom/baseHeader";
import { areaList } from "@vant/area-data";
export default {
  name: "register",
  components: {
    baseHeader,
  },
  data() {
    return {
      value: "",
      showArea: false,
      areaList,
      username: "",
      password: "",
      leftText: "取消",
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    pathTxt() {
      window.location.href = "https://cn.account.xiaomi.com/helpcenter";
    },
    onConfirm(values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    regNow(username, password) {
      if (username == "") {
        this.$refs.user.innerHTML = "请输入手机号";
      } else if (!/^1\d{10}$/.test(username)) {
        this.$refs.user.innerHTML = "请输入正确的手机号";
      } else if (password == "") {
        this.$refs.pass.innerHTML = "请输入密码";
      } else {
        this.axios({
          method: "get",
          url: "http://jx.xuzhixiang.top/ap/api/reg.php",
          params: {
            username,
            password,
          },
        }).then((res) => {
          if (res.data.code == 0) {
            // alert(res.data.msg);
            this.$toast(res.data.msg);
          } else {
            // this.$toast(res.data.msg + "即将跳转到登陆页面");
            this.$toast.loading({
              duration: 3000,
              message: res.data.msg + "\n已为你跳转到登陆页面",
              forbidClick: true,
            });
            
            this.$router.push({
              path: "/login",
            });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.left_text {
  height: 100%;
  /* display: inline; */
  font-size: 0.3rem;
  color: gray;
  line-height: 1rem;
}

.van-icon {
  vertical-align: middle;
  font-size: 0.38rem;
  color: grey;
}

.reg_con {
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
}
.reg_txt {
  color: rgba(0, 0, 0, 1);
  font-size: 0.4rem;
  padding: 0.5rem 0;
}
.reg_con >>> .van-cell {
  background: gainsboro;
  color: black;
  border-radius: 20px;
}
.reg_con >>> .van-field__control::-webkit-input-placeholder {
  color: black;
}
.text_con {
  text-align: left;
  font-size: 0.2rem;
  margin: 5px 0 0.3rem 0;
  color: grey;
}
.user_con {
  height: 0.9rem;
  background: gainsboro;
  border-radius: 20px;
  line-height: 0.85rem;
}
.reg_con >>> .van-cell__title {
  width: 0.5rem;
}
.reg_con >>> .van-cell-group {
  margin-top: 0.3rem;
}
.text_con1 {
  font-size: 0.2rem;
  text-align: left;
  margin-top: 0.3rem;
  color: red;
}
.reg_con >>> .van-button {
  background-color: orangered;
  border: none;
  border-radius: 20px;
  margin-top: 0.3rem;
}
.text_con2 {
  text-align: left;
  font-size: 0.2rem;
  color: grey;
  margin-top: 0.3rem;
}
.text_con3 {
  text-align: left;
  font-size: 0.2rem;
  color: red;
  margin-top: 0.3rem;
}
</style>