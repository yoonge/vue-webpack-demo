import Vue from 'vue'

Vue.filter('colFilter', function (val, ks) {
  for (const k in ks) {
    if (ks[k] === val) return true
  }
})

Vue.filter('isLink', function (val, key, ks) {
  for (const k in ks) {
    if (ks[k] === key) {
      return '<a href="' + val + '" target="_blank">' + val + '</a>'
    } else {
      return val
    }
  }
})
