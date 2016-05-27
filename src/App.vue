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
@import 'styles/bootstrap.min.css?v=201605111407';
@import 'assets/fonts/icons.css';
@import 'styles/comm.css?v=201605271619';

h1 {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  padding: 48px 0;
}
</style>
