<template>
  <div>
    <home-header :city="city"></home-header>
    <home-scroll :swiperList="swiperList"></home-scroll>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeScroll from './components/Scroll'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeScroll,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // 这里then传入的是函数名，作为argument 不是调用
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeSucc)
    },
    getHomeSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // console.log('activited')
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
