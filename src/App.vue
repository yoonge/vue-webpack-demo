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
@import 'styles/comm.css?v=201605042115';

h1 {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  padding: 48px 0;
}

.v-transition {
  transition: all .3s ease;
  overflow: hidden;
}

.v-enter {
  opacity: 1;
  transform: translate3d(0, 20%, 0);
}

.v-leave {
  opacity: 0;
  transform: translate3d(0, 10%, 0);
}
</style>
