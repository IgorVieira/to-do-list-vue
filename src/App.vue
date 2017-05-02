<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/home/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
#app {
  font-family: 'Indie Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
