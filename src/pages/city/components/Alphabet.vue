<template>
   <ul class="list">
       <li class="item"
       v-for="item of letters"
       :key="item"
       :ref="item"
       @touchstart="handleTouchStart"
       @touchend="handleTouchEnd"
       @touchmove="handleTouchMove"
       @click="handleClick"
       >{{item}}
       </li>
   </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchState: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
    //   console.log(e)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchState = true
    },
    handleTouchMove (e) {
      if (this.touchState) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 22)
        this.$emit('change', this.letters[index])
      }
    },
    handleTouchEnd () {
      this.touchState = false
    }
  },
  mounted () {
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/variables.styl'
.list
    display flex
    flex-direction  column
    justify-content center
    position absolute
    top 1.58rem
    right  0
    bottom  0
    width .4rem
    .item
        line-height .44rem
        text-align center
        color $bgColor
</style>
