import Vue from 'vue'

Vue.filter('colFilter', function (val, ks) {
  // const bugs = {}
  // val[bugs] = bugs
  // for (const x in val) {
  //   switch (x) {
  //     case 'highNum':
  //       let h = val[x]
  //       val.splice(x, 1)
  //       val[bugs]['highNum'] = h
  //       break
  //     case 'midNum':
  //       let m = val[x]
  //       val.splice(x, 1)
  //       val[bugs]['midNum'] = m
  //       break
  //     case 'lowNum':
  //       let l = val[x]
  //       val.splice(x, 1)
  //       val[bugs]['lowNum'] = l
  //       break
  //     case 'riskNum':
  //       let r = val[x]
  //       val.splice(x, 1)
  //       val[bugs]['riskNum'] = r
  //       break
  //     default:
  //       break
  //   }
  // }
  const l = ks.length - 1
  const newVal = {}
  for (let i = 0; i <= l; i++) {
    for (const v in val) {
      let j = ks.indexOf(v)
      if (j === i) newVal[v] = val[v]
    }
  }
  return newVal
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
