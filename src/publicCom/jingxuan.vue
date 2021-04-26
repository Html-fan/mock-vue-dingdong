<template>
<div>
  <div class="txt">小米精选</div>
  <div class="jingxuan">
    <img class="left_img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613bdeb494fa321f53df8880aac390f0.jpg?f=webp&w=537&h=762&bg=C6DCE9" alt="" />
    <div class="right_img" >
      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9" alt="" />
      <img src= "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/584ce466ed0b4a6e8f7f414df57e4680.jpg?f=webp&w=537&h=378&bg=4D92D3" alt="" />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "jingxun",
  data() {
    return {
      list: [
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613bdeb494fa321f53df8880aac390f0.jpg?f=webp&w=537&h=762&bg=C6DCE9",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/584ce466ed0b4a6e8f7f414df57e4680.jpg?f=webp&w=537&h=378&bg=4D92D3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.txt{
  font-size: .35rem;
  width: 95%;
  margin: .4rem auto .1rem ;
  text-align: left;
  font-weight: 600;
  letter-spacing: 1px;
}
.jingxuan{
  margin: .2rem auto;
  width: 95%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
}
.left_img{
  width: 49%;
  border-radius: .2rem;
  
}
.right_img{
width: 49%;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.right_img>img{
  width: 100%;
  height: 2.45rem;
  border-radius: .2rem;
}
</style>