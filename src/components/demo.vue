<template>
 <div class="com-wrap">
    //下拉刷新
    <van-pull-refresh 
     v-model="refreshLoading" 
     @refresh="onRefresh" 
     class='min-height'>
     
     //无数据时的展示
     <div class="no-comment" v-if="finished && !list.length">
          <img src="../assets/images/no_content.png"/>
          <p>还没有优质评论</p>
     </div>
     
     //上拉加载
     <van-list
          v-else
          v-model="loading"
          :finished="finished"
          :finished-text="list.length > 5 ? '已经到底部啦' : ''"
          loading-text="正在加载中"
          error-text="加载失败，请重试"
          @load="onLoad"
          >
      //内容区 
       <div v-for="(item,index) in listData" :key="index"   class='comment-item'>
          <commentList
              :title="item.title"
              :desc="item.desc"
              :img="item.img"
              :target_url="item.target_url"
           >
           </commentList>
          </div> 
        </van-list>
      </van-pull-refresh>
    </div>
  </template>
  <script>
import commentList from '@/components/commentList'
export default {
  name: 'MyComment',
  data() {
    return {
      loading: false,
      finished: false,
      refreshLoading: false,
      pageSize: 20, // 列表请求数
      pageNo: 1,//请求页码
      listData: [],//列表数据
      comment_nums: ''//评论总数量
    }
  },
  components: {
    commentList
  },
  created() {
    this.name = this.$route.query.name
  },
  mounted() {},
  methods: {
    getListData() {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('?_m=get_page&_a=comment_data', {
            params: {
              page_no: this.pageNo,
              page_size: this.pageSize,
            },
          })
          .then((res) => {
            this.loading = false
            let data = res.data

            if (res.ret == 0) {
              this.comment_nums = data.comment_nums//总的数据量
              this.listData = this.listData.concat(data.comment_list)

              if (this.listData.length >= this.comment_nums) {//目前展示出来的数据量大于等于总的会返回的数据量的时候，代表数据已经全部返回了，数据已经加载完
                this.finished = true
              }
              this.pageNo++
              resolve(res)
            } else {
               console.log('网络错误')
            }
          })
          .catch(() => {
            reject()
            this.loading = false
            this.finished = true
            console.log('网络错误')
          })
      })
    },
    
    /**
     * 获取列表数据
     */
    onLoad() {
      this.getListData();
    },
    /**
     * 下拉刷新
     */
    onRefresh() {
      this.pageNo = 1;
      this.list = [];
      this.finished = false;
      this.loading = true
      this.fetchList().then(res => {
        this.refreshLoading = false
        this.$toast({
          message: "刷新成功",
          duration: 1000
        });
      }).catch(error => {
        this.refreshLoading = false
      });
    }
  }
}
</script>
