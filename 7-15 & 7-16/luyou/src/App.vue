<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body,#app{
 width: 100%;
 height: 100%;
}
</style>
