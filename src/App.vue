<template>
  <div>
    <nav>
    <div>
      <a href="#">
         <router-link :to="{ name: 'home'}">
          <i class="fa fa-home"></i>
          Home
        </router-link >
      </a>
    </div>
  </nav>


    
    <div class="container">

     
      <transition name="page-view">
        <router-view></router-view>
     
      </transition>


    </div>



    <footer>
      <div>
        <div>
        Create by <a  href="https://twitter.com/igorprvieira">Igor Vieira <i class="fa fa-hand-peace-o" aria-hidden="true"></i></a>
        </div>
    </div>
  </footer>



  </div>
</template>

<script>
import Home from './components/home/Home'

export default {
  data(){
    return{
      routes:routes.filter(route => route.menu)
    }
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

.page-view-enter, .page-view-leave-active{
      opacity:0;
  }

  .page-view-enter-active, .page-view-leave-active{
      transition: 0.4s
  }

</style>
