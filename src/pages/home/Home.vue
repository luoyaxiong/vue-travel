<template>
  <div>
    <home-header></home-header>
    <home-scroll></home-scroll>
    <home-icon></home-icon>
    <div>text</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeScroll from './components/Scroll'
import HomeIcon from './components/Icon'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScroll,
    HomeIcon
  }
}
</script>

<style>

</style>
