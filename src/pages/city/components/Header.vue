<template>
  <div class="header">
      <router-link to="/">
          <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/styles/variables.styl'
.header
    position relative
    overflow hidden
    height  $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    .header-back
        position absolute
        top 0
        left 0
        width .64rem
        padding 0 .1rem
        text-align center
        font-size .42rem
        color #fff

</style>
