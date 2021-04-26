<template>
  <div class="login">
    <baseHeader>
      <div slot="left" @click="back" class="left_text">
        <i class="van-icon van-icon-arrow-left"></i>
      </div>
      <div slot="right" @click="pathTxt" class="right_text">
        <van-icon name="question-o" />
      </div>
    </baseHeader>

    <div class="log_con">
      <img :src="imgSrc" alt="" srcset="" class="logo_img" />
      <div>
        <input
          type="text"
          placeholder="小米账号/手机号/邮箱"
          v-model="username"
          class="username"
          
        />
      </div>
      <div class="psd_con">
        <input
          :type="passwordType"
          v-model="password"
          placeholder="密码"
          class="password"

        />
        <img :src="psdImg" alt="" srcset="" @click="changePsd" class="psdImg" />
      </div>
      <p class="pass_no" @click="passNo">忘记密码</p>
      <button class="login_btn" @click="login">登录</button>

      <div class="reg_con">
        <span @click="pathReg">立即注册</span>
        <span @click="logIphone">短信登录</span>
      </div>

      <div class="text_con">
        <input type="checkbox" name="" id="log_chex" ref="checkedType" />
        <div class="text_con1">
          已阅读并同意:<a
            href="https://static.account.xiaomi.com/html/agreement/user/zh_CN.html"
            >《用户协议》</a
          ><a href="https://privacy.mi.com/miaccount/zh_CN/">《隐私政策》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseHeader from "@/publicCom/baseHeader";
export default {
  name: "login",
  components: {
    baseHeader,
  },

  data() {
    return {
      passwordType: "password",
      psdImg: require("@/assets/psdImg/eyeb.svg"),
      username: "",
      password: "",
      imgSrc:
        "data:image/png;base64,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",
    };
  },
  beforeCreate() {},
  methods: {
    logIphone(){
      this.$toast("暂不支持短信登录");
    },
    passNo(){
      window.location.href = "https://cn.account.xiaomi.com/helpcenter";
    },
    changePsd() {
      this.passwordType = this.passwordType == "password" ? "text" : "password";
      this.psdImg =
        this.psdImg == require("@/assets/psdImg/eyeb.svg")
          ? require("@/assets/psdImg/eyek.svg")
          : require("@/assets/psdImg/eyeb.svg");
    },
    back() {
      
     if (this.$route.query.redirect == location.hostname) {
        this.$router.go(-1);
     }else{
       this.$router.push({path:"/home"})
     }
    },
    pathTxt() {
      window.location.href = "https://cn.account.xiaomi.com/helpcenter";
    },
    pathReg() {
      this.$router.push({
        path: "./register",
      });
    },

    login() {
      if (document.getElementById("log_chex").checked == false) {
        this.$toast("请你同意用户条款");
      } else if (this.username == "") {
        this.$toast("账号不能为空");
      } else if (this.password == "") {
        this.$toast("密码不能为空");
      } else if (!/^1\d{10}$/.test(this.username)) {
        this.$toast("请输入正确的手机号");
      } else {
        this.axios({
          method: "get",
          url: "http://jx.xuzhixiang.top/ap/api/login.php",
          parmas:{
            username: this.username,
            password: this.password,
          }
          
        }).then((res) => {
          // console.log(res);
          if (res.data.code == 1) {
            this.$toast(res.data.msg);
            localStorage.setItem("token",this.username)
            this.$router.push({
              name:"home",
              
            });
          } else {
            this.$toast(res.data.msg);
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  font-size: 0;
}
.van-icon {
  font-size: 0.4rem;
  vertical-align: middle;
  color: black;
}
.log_con {
  width: 80%;
  margin: 0 auto;
  padding-top: 1.3rem;
  text-align: center;
}
.logo_img {
  height: 1rem;
  width: 1rem;
  text-align: center;
}
.username {
  border: none;
  border-bottom: 1px solid gray;
  margin: 0.3rem 0 5px 0;
  height: 0.85rem;
  width: 100%;
  font-size: 0.3rem;
  opacity: 0.7;
}
.password {
  border: none;
  border-bottom: 1px solid gray;
  height: 0.85rem;
  width: 100%;
  font-size: 0.3rem;
  opacity: 0.7;
}
.pass_no {
  font-size: 0.2rem;
  margin: 0.3rem 0;
  text-align: end;
  opacity: 0.6;
}
.login_btn {
  height: 0.75rem;
  width: 100%;
  color: aliceblue;
  background: orangered;
  /* margin-top: 0.3rem; */
  border: none;
  border-radius: 0.7rem;
  font-size: 0.28rem;
  font-weight: 600;
  letter-spacing: 5px;
}
.reg_con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.28rem;
  margin-top: 0.4rem;
  opacity: 0.5;
}
.text_con {
  font-size: 0.2rem;
  text-align: left;
  margin-top: 5rem;
  opacity: 0.6;
}
.text_con1 {
  display: inline;
  vertical-align: middle;
}
#log_chex {
  height: 0.3rem;
  width: 0.3rem;
  vertical-align: middle;
}
.psdImg {
  width: 0.7rem;
  height: 0.4rem;
  opacity: 0.5;
  position: absolute;
  right: 0.1rem;
  bottom: 0.2rem;
}
.psd_con {
  position: relative;
}
</style>