<template>
  <div class="app">
    <burp-header></burp-header>
    <router-view
      class="view"
      transition="fade">
    </router-view>
  </div>
</template>

<script lang="babel">
import BurpHeader from 'components/BurpHeader.vue'
import store from 'src/vuex/store.js'

export default {
  name: 'App',
  components: {
    BurpHeader
  },
  store
}
</script>

<style>
@import 'styles/comm.css?v=201605102328';

h1 {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  padding: 48px 0;
}

.fade-transition {
  opacity: 1;
  position: relative;
  transition: all .6s ease;
}
.fade-leave {
  opacity: 0;
  transform: translate3d(0, 10%, 0);
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}
.fade-enter {
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}

.v-transition {
  transition: all .3s ease;
  overflow: hidden;
}
.v-enter {
  opacity: 1;
  transform: translate3d(0, 10%, 0);
}
.v-leave {
  opacity: 0;
  transform: translate3d(0, 5%, 0);
}
</style>
