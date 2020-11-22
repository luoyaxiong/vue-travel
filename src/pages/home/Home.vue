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

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScroll,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
