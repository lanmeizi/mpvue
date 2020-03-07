<template>
  <div id="index">
    <SearchBar
      :disabled="true"
      @onClick="onSearchBarkClick"
    />
    <HomeCard />
    <HomeBanner
      img="http://img5.imgtn.bdimg.com/it/u=3163535228,1008947289&fm=26&gp=0.jpg"
      title="mpvue2.0实战多端小程序练习学习课程"
      subTitle="立即体验"
      @onClick="onBannerClick"
    />
    <div class="homeBook">
      <HomeBook
        title="为你推荐"
        :row="2"
        :col="2"
        :data="data"
        mode="row"
        btn-text="更多"
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
export default {
  data() {
    return {
      data: [
        {
          'id': 55,
          'fileName': '2018',
          'cover': 'http://img1.imgtn.bdimg.com/it/u=1250461792,3663661297&fm=26&gp=0.jpg',
          'title': '语文书的图片大全唯美书的图片大全唯美书的图片大全唯美',
          'author': '高尔基',
          'publisher': 'Spring',
          'bookId': '2018_Book_Drink',
          'category': 8,
          'categoryText': 'Geography',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 57,
          'fileName': '2019',
          'cover': 'http://img1.imgtn.bdimg.com/it/u=1250461792,3663661297&fm=26&gp=0.jpg',
          'title': '语文书的图片大全唯美书的图片大全唯美',
          'author': '高尔基',
          'publisher': 'Spring',
          'bookId': '2018_Book_Drink',
          'category': 8,
          'categoryText': 'Geography',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 56,
          'fileName': '2010',
          'cover': 'http://img1.imgtn.bdimg.com/it/u=1250461792,3663661297&fm=26&gp=0.jpg',
          'title': '语文书的图片大全唯美书的图片大全唯美书的图片大全唯美书的图片大全唯美',
          'author': '高尔基',
          'publisher': 'Spring',
          'bookId': '2018_Book_Drink',
          'category': 8,
          'categoryText': 'Geography',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 59,
          'fileName': '2011',
          'cover': 'http://img1.imgtn.bdimg.com/it/u=1250461792,3663661297&fm=26&gp=0.jpg',
          'title': '语文mpvue2.0实战多端小程序练习学习课程',
          'author': '高尔基',
          'publisher': 'Spring',
          'bookId': '2018_Book_Drink',
          'category': 8,
          'categoryText': 'Geography',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 58,
          'fileName': '2012',
          'cover': 'http://img1.imgtn.bdimg.com/it/u=1250461792,3663661297&fm=26&gp=0.jpg',
          'title': '语文',
          'author': '高尔基',
          'publisher': 'Spring',
          'bookId': '2018_Book_Drink',
          'category': 8,
          'categoryText': 'Geography',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        }
      ]
    }
  },
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  methods: {
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
