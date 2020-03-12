<template>
  <div>
    <!-- <TagGroup
      :value="tags"
      header-text="热门搜索"
      btn-text="换一批"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
    />
    <SearchItem
      icon="apps-o"
      title="计算机科学"
      sub-title="类别"
    /> -->
    <SearchTable :data="list" />
  </div>
</template>

<script>
import TagGroup from '../../components/base/TagGroup'
import SearchItem from '../../components/search/SearchItem'
import SearchTable from '../../components/search/SearchTable'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          cover: 'http://img3m1.ddimg.cn/45/32/1011676491-1_u_6.jpg',
          title: '树形结构树形结构树形结构树形结构树形结构树形结构树形结构树形结构树形结构树形结构树形结构树形结构树形结构',
          author: '兰兰妹子',
          categoryText: '测试数据'
        },
        {
          id: 5,
          cover: 'http://img3m1.ddimg.cn/45/32/1011676491-1_u_6.jpg',
          title: '树形结构',
          author: '兰兰妹子',
          categoryText: '测试数据'
        },
        {
          id: 2,
          cover: 'http://img3m1.ddimg.cn/45/32/1011676491-1_u_6.jpg',
          title: '树形结构',
          author: '兰兰妹子',
          categoryText: '测试数据'
        },
        {
          id: 3,
          cover: 'http://img3m1.ddimg.cn/45/32/1011676491-1_u_6.jpg',
          title: '树形结构',
          author: '兰兰妹子',
          categoryText: '测试数据'
        },
        {
          id: 66,
          cover: 'http://img3m1.ddimg.cn/45/32/1011676491-1_u_6.jpg',
          title: '树形结构',
          author: '兰兰妹子',
          categoryText: '测试数据'
        }
      ]
    }
  },
  components: {
    TagGroup,
    SearchItem,
    SearchTable
  },
  methods: {
    onTagClick(text, index) {
      console.log('tag...', text, index)
    },
    onBtnClick() {
      console.log('btn...')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
