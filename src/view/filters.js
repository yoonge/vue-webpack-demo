import Vue from 'vue'

Vue.filter('colFilter', function (val, ks) {
  for (const k in ks) {
    if (ks[k] === val) return true
  }
})

Vue.filter('isLink', function (val, k, key) {
  if (k === key) {
    return '<a href="' + val + '">' + val + '</a>'
  } else {
    return val
  }
})
