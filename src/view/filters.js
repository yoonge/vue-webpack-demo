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

Vue.filter('colFilter', function (val, ks) {
  const newVal = {}
  for (const k in ks) {
    for (const v in val) {
      if (v === ks[k].field) newVal[v] = val[v]
    }
  }
  return newVal
})

Vue.filter('isLink', function (val, key, ks) {
  for (const k in ks) {
    if (k === key && ks[k].linkPrefix) {
      return '<a href="' + val + '" target="_blank">' + val + '</a>'
    } else {
      return val
    }
  }
})
