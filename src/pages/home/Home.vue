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

export default {
  name: 'Home',
  data () {
    return {
      city: '',
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
  methods: {
    getHomeInfo () {
      // 这里then传入的是函数名，作为argument 不是调用
      axios.get('/api/index.json').then(this.getHomeSucc)
    },
    getHomeSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
