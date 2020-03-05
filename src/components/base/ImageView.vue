<template>
  <div id="image-view" @click="onClick">
    <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      @load="onLoad"
      @error="onError"
      v-show="!isLoading && !error"
    />
    <!-- 占位符图片 图片没有正常加载时显示的图片 -->
    <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      src="http://img1.imgtn.bdimg.com/it/u=3173584241,3533290860&fm=26&gp=0.jpg"
      :mode="mode"
      :lazy-load="lazyLoad"
      v-show="isLoading || error"
    />
  </div>
</template>

<script>
  export default {
    props: {
      src: { // 图片地址
        type: String,
        default: ''
      },
      mode: { // 图片加载模式
        type: String,
        default: 'widthFix' // 宽度自适应
      },
      lazyLoad: { // 懒加载模式
        type: Boolean,
        default: true
      },
      round: { // 图片是否位圆形图片
        type: Boolean,
        default: false
      },
      height: { // 图片的高度
        type: String,
        default: 'auto'
      }
    },
    watch: {
      src(newValue, preValue) {
      }
    },
    data() {
      return {
        isLoading: true,
        error: false
      }
    },
    methods: {
      onClick() { // 图片的点击事件
        this.$emit('onClick')
      },
      onLoad() { // 图片加载成功之后的回调
        this.isLoading = false
        this.error = false
      },
      onError() { // 图片加载失败的回调
        this.error = true
        this.isLoading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
#image-view {
  width: 100%;
  .image {
    width: 100%;
    &.round {
      border-radius: 50%;
    }
  }
}
</style>