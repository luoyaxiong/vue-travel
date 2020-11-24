<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 当前路由地址的内容 -->
    <!-- 在keepalive中的内容会放在内存中，不会重新渲染加载 -->
    <!-- 可以用exclude 排除组件缓存 -->
    <keep-alive >
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
