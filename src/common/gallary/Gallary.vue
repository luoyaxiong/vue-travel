<template>
  <div class="container" @click="handleShowGallary">
      <div class="wrapper">
          <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide
                v-for="(item, index) of swiperList"
                :key="index"><img class="gallary-img" :src="item" >
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
          // clickable: true,
        },
        loop: true
        // Some Swiper option/callback...
      }
    }
  },
  methods: {
    handleShowGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  // .container >>> .swiper-container
  //   overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      overflow hidden
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
    //   .swiper-pagination
    //     color: #fff
    //     bottom: -1rem
</style>
