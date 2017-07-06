<template>
  <div>
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"> <router-link :to="{ name: 'home'}">
          <i class="fa fa-home"></i>
          Home
        </router-link ></a>
      </div>
      </div>
     
  </nav>


    
    <div class="container">

     
      <transition name="page-view">
        <router-view></router-view>
     
      </transition>


    </div>



   



  </div>
</template>

<script>
import { routes } from './routes';

export default {
  data() {
    return {
      routes: routes.filter(route => route.menu),
    };
  },
};
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

.page-view-enter, .page-view-leave-active{
      opacity:0;
  }

  .page-view-enter-active, .page-view-leave-active{
      transition: 0.4s
  }

</style>
