<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import {mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
