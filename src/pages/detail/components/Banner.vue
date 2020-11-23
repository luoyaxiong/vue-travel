<template>
  <div>
      <div class="banner" @click="handleGallaryOpen">
          <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
          <div class="banner-info">
            <div class="banner-title">故宫（AAAAA景区）</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe64a;</span>
                2
            </div>
          </div>
      </div>
      <common-gallary
      :swiperList="swiperList"
      @close='handleGallaryClose'
      v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'
      }]
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleGallaryOpen () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      padding-left .3rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        // padding-left 1.6rem
        background red
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
