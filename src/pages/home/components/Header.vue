<template>
  <div class="header">
    <div class="header-back">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      Input city/sight
    </div>
    <div class="header-city">
      {{city}}
      <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;

  .header-back {
    display: block;
    float: left;
    width: 0.64rem;
    text-align: center;
  }

  .header-search {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    padding-left: 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    border-radius: 0.08rem;
    background: #fff;
    color: #ccc;
  }

  .header-city {
    float: right;
    width: 1.34rem;
    text-align: center;
    font-size: 0.28rem;

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>
