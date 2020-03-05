<template>
  <div id="index">
    <SearchBar
      :disabled="true"
      @onClick="onSearchBarkClick"
    />
    <ImageView
      src="http://pics.sc.chinaz.com/files/pic/pic9/202001/hpic1978.jpg"
    />
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
import ImageView from '../../components/base/ImageView'
export default {
  data() {
    return {
      show: false
    }
  },

  components: {
    SearchBar,
    ImageView
  },

  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    }
  },

  created() {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
</style>
