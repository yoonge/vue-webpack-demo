import Vue from 'vue'

Vue.filter('formatCol', function (val) {
  val['bugs'] = {}
  for (const x in val) {
    switch (x) {
      case 'highNum':
        val['bugs']['highNum'] = val[x]
        break
      case 'midNum':
        val['bugs']['midNum'] = val[x]
        break
      case 'lowNum':
        val['bugs']['lowNum'] = val[x]
        break
      case 'riskNum':
        val['bugs']['riskNum'] = val[x]
        break
      default:
        break
    }
  }
  return val
})

Vue.filter('colFilter', function (val, cols) {
  const newVal = {}
  for (const c in cols) {
    for (const v in val) {
      if (v === cols[c].field) newVal[v] = val[v]
    }
  }
  return newVal
})

Vue.filter('isLink', function (val, key, cols) {
  for (const c in cols) {
    if (cols[c].field === key && cols[c].linkPrefix) val = '<a href="' + cols[c].linkPrefix + val + '">' + val + '</a>'
  }
  return val
})
