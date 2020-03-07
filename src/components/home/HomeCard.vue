<template>
  <div class="home-card" id="homeCard">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView
            src="http://img0.imgtn.bdimg.com/it/u=1972224372,2850391150&fm=26&gp=0.jpg"
            round
          />
        </div>
        <div class="nickname">{{ '米老鼠' }}</div>
        <div class="shelf-text">书架共有{{ 3 }}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-wrapper">
            <ImageView
              src="http://img4.imgtn.bdimg.com/it/u=1983810666,1489705894&fm=26&gp=0.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="http://img4.imgtn.bdimg.com/it/u=2828467515,1881403397&fm=26&gp=0.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="http://img3.imgtn.bdimg.com/it/u=1460691311,220843696&fm=26&gp=0.jpg"
            />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon
            class="arrow"
            name="arrow"
            size="11px"
            color="#828489"
          ></van-icon>
        </div>
      </div>
      <div class="feedbook-wrapper" @click="onFeedBacClick">反馈</div>
    </div>
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>

<script>
import ImageView from '../../components/base/ImageView'
import Dialog from '@vant/weapp/dist/dialog/dialog'
export default {
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  components: {
    ImageView
  },
  methods: {
    onFeedBacClick() {
      Dialog.confirm({
        title: '反馈',
        message: '您是否确认提交反馈信息?',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(() => {
        console.log('点击是之后的事件')
      }).catch(() => {
        console.log('点击否之后的事件')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#homeCard {
  background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    position: relative;
    padding: 21.5px 17px 20px 20px;
    box-sizing: border-box;
    .user-info {
      display: flex;
      align-items: center;
      .avatar-wrapper {
        width: 20px;
        height: 20px;
      }
      .nickname, .shelf-text {
        font-size: 12px;
        color: #fff;
      }
      .nickname {
        margin: 0 8.5px;
      }
      .shelf-text {
        opacity: .7;
      }
      .round-item {
        width: 4px;
        height: 4px;
        background: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .book-info {
      display: flex;
      margin-top: 16.5px;
      .book-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-around;
        .book-img-wrapper {
          width: 72px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        align-items: center;
        .shelf {
          width: 11px;
          font-size: 11px;
          word-break: break-word;
          color: #fff;
          opacity: .8;
        }
      }
    }
    .feedbook-wrapper {
      width: 44.5px;
      height: 23.5px;
      line-height: 23.5px;
      text-align: center;
      background: #707070;
      border-radius: 100px 0 0 100px;
      color: #fff;
      font-size: 11px;
      position: absolute;
      top: 19.5px;
      right: 0;
    }
  }
}
</style>
