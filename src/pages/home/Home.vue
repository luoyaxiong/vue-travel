<template>
  <div>
    <home-header></home-header>
    <home-scroll></home-scroll>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
      axios.get('/api/test.json').then(this.getHomeSucc)
    },
    getHomeSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
