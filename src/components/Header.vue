<template>
  <div class="site-header-main">
    <div class="site-header-bd bd1200">
      <a class="logo_part noselect">云智测</a>
      <div class="login_info">
        <a href="javascript:;" class="login-user"><i class="touxiang tx01"></i>李铁柱(测试组)</a>|<a href="login.html" class="outofsys">退出</a>
      </div>
      <burp-nav :items="{{items}}"></burp-nav>
    </div>
  </div>
</template>

<script lang="babel">
import BurpNav from './Nav.vue'
import NavData from '../constants/nav.js'

export default {
  name: 'BurpHeader',
  components: {
    BurpNav
  },
  data () {
    return {
      items: NavData
    }
  }
}
</script>
