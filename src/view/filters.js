import 'babel-polyfill'
import Vue from 'vue'

export default Vue.filter('colFilter', function (val, k, ks) {
  if (ks.findIndex(item => item === k) > -1) return val
})
