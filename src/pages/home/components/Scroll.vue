<template>
  <div class="scroll">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li><img src="@/assets/images/lbj1.jpg" alt="LBJ" /></li>
        <li><img src="@/assets/images/lbj2.jpg" alt="LBJ" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeScroll',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style lang="stylus" scoped></style>
