<template>
  <div id="searchBar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name="search" size="16px" color="#858C96" />
      <input class="search-bar-input"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch.length === 0 ? '请输入搜索关键字' : hotSearch"
        v-model="searchWord"
        @input="onChange"
        confirm-type="search"
        @confirm="onConfirm"
        placeholder-style="color: #ADB4BE"
      />
      <van-icon
        class="clear"
        name="clear"
        size="16px"
        color="#ccc"
        @click="onClearClick"
        v-if="searchWord.length > 0"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: { // 获取焦点
      type: Boolean,
      default: false
    },
    disabled: { // 禁用
      type: Boolean,
      default: false
    },
    limit: { // 可输入的最大长度
      type: Number,
      default: 50
    },
    hotSearch: { // 默认内容
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick() { // 搜索框点击事件
      this.$emit('onClick')
    },
    onClearClick() { // 清除按钮
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange(e) { // 输入监听事件
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm(e) { // 用户点击右下角搜索的时候触发的事件
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    setValue(v) { // 对输入框关键字赋值
      this.searchWord = v
    },
    getValue() { // 获取输入框的关键字
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
#searchBar {
  padding: 15px 15.5px;
  .search-bar-wrapper {
    display: flex;
    align-items: center;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 15px 17px;
    .search-bar-input {
      flex: 1;
      margin: 0 8px;
    }
  }
}
</style>
