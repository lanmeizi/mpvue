<template>
  <div>
    <div id="index" v-if="isAuth">
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
          @onMoreClick="recommendChange('recommend')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div class="homeBook">
        <HomeBook
          title="免费阅读"
          :row="2"
          :col="2"
          :data="freeRead"
          mode="row"
          btn-text="换一批"
          @onMoreClick="recommendChange('freeRead')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div class="homeBook">
        <HomeBook
          title="当前最热"
          :row="1"
          :col="4"
          :data="hotBook"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('hotBook')"
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
          @onMoreClick="onCategoryMoreClick"
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
    <Auth  v-if="!isAuth" @getUserInfo="init" />
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import HomeCard from '../../components/home/HomeCard'
import HomeBanner from '../../components/home/HomeBanner'
import HomeBook from '../../components/home/HomeBook'
import Auth from '../../components/base/Auth'
import { getHomeData, recommend, freeRead, hotBook } from '../../api'
import { getSetting, getUserInfo, setStorageSync, getStorageSync, getUserOpenId } from '../../api/wechat'
export default {
  data() {
    return {
      hotSearch: '',
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: [],
      homeCard: {},
      isAuth: true
    }
  },
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getSetting()
    },
    recommendChange(key) {
      switch (key) {
        case 'recommend':
          recommend().then(response => {
            this.recommend = response.data.data
          })
          break
        case 'freeRead':
          freeRead().then(response => {
            this.freeRead = response.data.data
          })
          break
        case 'hotBook':
          hotBook().then(response => {
            this.hotBook = response.data.data
          })
          break
      }
    },
    onCategoryMoreClick() {
    },
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
    },
    getUserInfo(e) {
      getUserInfo(
        (userInfo) => {
          setStorageSync('userInfo', userInfo)
          const openId = getStorageSync('openId')
          if (!openId || openId.length === 0) {
            getUserOpenId()
          } else {
            console.log('已获得openId')
          }
        },
        () => {
          console.log('failed...') // 获取用户信息,抛出异常
        }
      )
    },
    getSetting() { // 判断小程序是否获得权限
      getSetting(
        'userInfo',
        () => {
          this.isAuth = true
          this.getUserInfo()
        },
        () => {
          this.isAuth = false
        }
      )
    }
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
