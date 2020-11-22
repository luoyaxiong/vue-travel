<template>
  <div>
    <home-header></home-header>
    <home-scroll></home-scroll>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <div>text</div>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeScroll from './components/Scroll'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScroll,
    HomeIcon,
    HomeRecommend
  }
}
</script>

<style>

</style>
