import Vue from 'vue'

Vue.filter('colFilter', function (value, ks) {
  for (const k in ks) {
    if (ks[k] === value) return true
  }
})
