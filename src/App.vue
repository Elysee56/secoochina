<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
}
#app {
  font-family: '微软雅黑';
}

h1, h2,h3,h4,h5,h6{
  font-weight: normal;
}

li {
  list-style:none;
}

a {
  color: #333;
  text-decoration:none;
}
</style>
