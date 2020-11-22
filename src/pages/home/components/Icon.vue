<template>
  <div class="icons wrapper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide v-for="(page, index) of pages"
      :key="index">
          <div class="icon"  v-for="item of page" :key="item.id">
              <div class="icon-img">
                   <img class="icon-img-content" :src="item.imgUrl" alt="lbj"/>
                   <div class="icon-desc">{{ item.desc }}</div>
              </div>
          </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png" alt="">
            <div class="icon-desc">热门景点</div>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
        // Some Swiper option/callback...
      },
      iconList: [
        {
          id: '0001',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票1'
        },
        {
          id: '0003',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票2'
        },
        {
          id: '0004',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票3'
        },
        {
          id: '0005',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票4'
        },
        {
          id: '0006',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票5'
        },
        {
          id: '0007',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票6'
        },
        {
          id: '0008',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票7'
        },
        {
          id: '0009',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '景点门票8'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
//   mounted () {
//     console.log('**********')
//     console.log(this.pages)
//   }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/variables.styl'
@import '~@/assets/styles/mixins.styl'
// .icons >>> .swiper-container
//     height: 0
//     padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        // text-align: center
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
        .icon-desc
            position: absolute
            // top 0
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .84rem
            text-align: center
            color: $darkTextColor
        // ellipsis()
</style>
