<template>
  <div class="app">
    <burp-header></burp-header>
    <router-view
      class="view"
      :transition="effect"
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script lang="babel">
import BurpHeader from 'components/BurpHeader.vue'

export default {
  name: 'App',
  components: {
    BurpHeader
  }
}
</script>

<style>
@import 'styles/comm.css';
body { overflow-x: hidden; }
h1 { font-size: 48px; font-weight: bold; text-align: center; padding: 48px 0; }
.view {
  transition: all .3s ease;
}
.v-enter{
 opacity: 1;
 transform: translate3d(100%, 0, 0);
}
.v-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
