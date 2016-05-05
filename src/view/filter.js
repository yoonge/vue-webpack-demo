import Vue from 'vue'

Vue.filter('colFilter', function (val, k, ks) {
  if (ks.indexOf(k) > -1) {
    return val
  }
})
