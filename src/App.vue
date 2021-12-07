<template>
  <div id="app">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="background-color: #b8ddf7;padding: 10px 0 10px 0;display: flex; justify-content: center;">
      <el-breadcrumb-item :to="{ path: '/' }">search</el-breadcrumb-item>
      <el-breadcrumb-item
          v-for="item in routeItems"
          :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      routeItems: [],
    }
  },
  watch: {
    '$route' (val) {
      this.routeItems = val.matched
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  padding: 0 5px 0 5px;
}
</style>
