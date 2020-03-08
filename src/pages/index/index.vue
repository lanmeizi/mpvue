<template>
  <div id="index">
    <SearchBar
      :disabled="true"
      @onClick="onSearchBarkClick"
      :hot-search="hotSearch"
    />
    <HomeCard :data="homeCard" />
    <HomeBanner
      img="http://img5.imgtn.bdimg.com/it/u=3163535228,1008947289&fm=26&gp=0.jpg"
      title="mpvue2.0实战多端小程序练习学习课程"
      subTitle="立即体验"
      @onClick="onBannerClick"
    />
    <div class="homeBook">
      <HomeBook
        title="为你推荐"
        :row="1"
        :col="3"
        :data="recommend"
        mode="col"
        btn-text="换一批"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <div class="homeBook">
      <HomeBook
        title="免费阅读"
        :row="2"
        :col="2"
        :data="hotBook"
        mode="col"
        btn-text="换一批"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <div class="homeBook">
      <HomeBook
        title="当前最热"
        :row="1"
        :col="4"
        :data="freeRead"
        mode="col"
        btn-text="换一批"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <div class="homeBook">
      <HomeBook
        title="分类"
        :row="3"
        :col="2"
        :data="category"
        mode="category"
        btn-text="查看全部"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onHomeBookClick"
      />
    </div>
    <!-- <ImageView
      src="http://pics.sc.chinaz.com/files/pic/pic9/202001/hpic1978.jpg"
      round  圆形图片
      height="300px"
      mode="scarleToFill"
    /> -->
    <!-- <ImageView
      src="http://pics.sc.chinaz.com/files/pic/pic9/202001/hpic1978.jpg"
      height="300px"  自定义图片高度
      mode="scarleToFill"
    /> -->
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import HomeCard from '../../components/home/HomeCard'
import HomeBanner from '../../components/home/HomeBanner'
import HomeBook from '../../components/home/HomeBook'
import { getHomeData } from '../../api'
export default {
  data() {
    return {
      hotSearch: '',
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: [],
      homeCard: {}
    }
  },
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  mounted() {
    this.getHomeData()
  },
  methods: {
    getHomeData() {
      getHomeData({ openId: '1234' }).then(response => {
        const {
          data: {
            hotSearch: {
              keyword
            },
            shelf,
            shelfCount,
            banner,
            recommend,
            freeRead,
            hotBook,
            category
          }
        } = response.data
        this.hotSearch = keyword
        this.banner = banner
        this.recommend = recommend
        this.freeRead = freeRead
        this.hotBook = hotBook
        this.category = category
        this.homeCard = {
          bookList: shelf,
          num: shelfCount,
          userInfo: {
            avater: 'http://img0.imgtn.bdimg.com/it/u=1972224372,2850391150&fm=26&gp=0.jpg',
            nickname: '米老鼠'
          }
        }
      }).catch(err => {
        console.log('捕获异常', err)
      })
    },
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onBannerClick() {
      console.log('onBannerClick...')
    },
    onBookMoreClick() {
      console.log('点击更多按钮')
    },
    onHomeBookClick() {
      console.log('点击图书')
    }
  },
  created() {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
#index {
  .homeBook {
    margin-top: 23px;
  }
}
</style>
