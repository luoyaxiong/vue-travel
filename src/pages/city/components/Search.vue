<template>
    <div>
        <div class="search">
        <input type="text" class="search-input"
        v-model="keyword"
        placeholder="输入城市名称或者拼音">
        </div>

        <div class="search-content"
        ref="search"
        v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                v-for="item of list"
                :key="item.id"
                @click="handleClickHot(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item"
                v-show="hasResult">没有找到匹配</li>
            </ul>
        </div>
    </div>

</template>
<script>
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasResult () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
                       value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleClickHot (cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
      this.keyword = ''
    },
    ...mapActions(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, { mouseWheel: true, click: true, tap: true })
  }

}
</script>

<style lang='stylus' scoped>
 @import '~@/assets/styles/variables.styl'
.search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        padding 0 .3rem
        line-height .62rem
        text-align center
        border-radius .06rem
        color #666
.search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    background #eee
    .border-bottom
     &:before
        border-color  #ccc
    .search-item
        padding-left .2rem
        background #fff
        line-height .62rem
        color #666s

</style>
