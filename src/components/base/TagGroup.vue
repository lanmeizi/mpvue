<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{ headerText }}</div>
      <div class="header-btn" @click="onBtnClick">{{ btnText }}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text, index) in value" :key="index">
        <Tag :text="text" @onClick="onTagClick(text, index)" />
      </div>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'
export default {
  props: {
    headerText: String,
    btnText: String,
    value: Array
  },
  data() {
    return {}
  },
  components: {
    Tag
  },
  methods: {
    onTagClick(text, index) {
      this.$emit('onTagClick', text, index)
    },
    onBtnClick() {
      this.$emit('onBtnClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-group-wrapper {
  .tag-group-header {
    display: flex;
    justify-content: space-between;
    padding: 0 16.5px;
    font-size: 14px;
    line-height: 20px;
    .header-text {
      color: #333;
    }
    .header-btn {
      color: #3698EF;
    }
  }
  .tag-group {
    display: flex;
    flex-flow: row wrap;
    padding: 4px 10px 0 10px;
    .tag-group-inner {
      padding: 12px 6px 0 6px;
    }
  }
}
</style>
