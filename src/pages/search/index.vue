<template>
  <div>
    <Tag text="测试文本" @onClick="onTagClick" />
  </div>
</template>

<script>
import Tag from '../../components/base/Tag'
export default {
  data() {
    return {}
  },
  components: {
    Tag
  },
  methods: {
    onTagClick() {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
