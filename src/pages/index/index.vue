<template>
  <div id="index">
    <SearchBar
      :disabled="true"
      @onClick="onSearchBarkClick"
    />
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
export default {
  data() {
    return {
      show: false
    }
  },

  components: {
    SearchBar
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
#index {
}
</style>
