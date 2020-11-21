<template>
  <div>
    <home-header></home-header>
    <home-scroll></home-scroll>
    <div>text</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeScroll from './components/Scroll'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScroll
  }
}
</script>

<style>

</style>
