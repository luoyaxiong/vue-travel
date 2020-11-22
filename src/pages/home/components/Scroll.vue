<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide
      v-for="item of swiperList"
      :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt="lbj"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeScroll',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
        // Some Swiper option/callback...
      }
    //   swiperList: [{
    //     id: '0001',
    //     imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
    //   },
    //   {
    //     id: '0002',
    //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'
    //   }]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    },
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

 <style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>>
