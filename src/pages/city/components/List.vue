<template>
  <div class="list" ref='wrapper'>
    <div>
        <div class="area">
                    <div class="title border-topbottom">当前城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                    </div>
        </div>

        <div class="area">
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        >
                            <div class="button">{{item.name}}</div>
                        </div>
                    </div>
        </div>
        <div >
            <div class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key">
                    <div class="title border-topbottom">{{key}}</div>
                    <div class="item-list ">
                        <div class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id">
                                {{innerItem.name}}
                        </div>
                    </div>

        </div>
        </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    // citiesLen () {
    //   return Object.keys(this.cities).length
    // }
  },
  mounted () {
    // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染,底层用到了 MutationObserver 或者是 setTimeout(fn, 0)。其实我们在这里把 this.$nextTick 替换成 setTimeout(fn, 20) 也是可以的（20 ms 是一个经验值，每一个 Tick 约为 17 ms），对用户体验而言都是无感知的。
    // 这里还有个小bug 就是刚加载进入不能滑动: 加长延时的时间就可以解决
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    }, 60)
  }
}
</script>

<style lang='stylus' scoped>
    .border-topbottom
     &:before
        border-color  #ccc
     &:after
        border-color  #ccc
    .border-bottom
     &:before
        border-color  #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0

        .title
            line-height .54rem
            background  #eee
            padding-left  .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            padding .1ren
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border  .02rem solid #ccc
                    border-radius .06rem
        .item-list
            line-height  .58rem
            color #666
            padding-left .2rem

</style>
