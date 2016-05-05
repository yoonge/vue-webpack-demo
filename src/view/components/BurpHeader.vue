<template>
  <header>
    <div class="site-header-main">
      <div class="site-header-bd bd1200">
        <a v-link="'/'" class="logo_part noselect">云智测</a>
        <div class="login_info">
          <a v-link="'/'" class="login-user"><i class="touxiang tx01"></i>李铁柱(测试组)</a>|<a v-link="'/'" class="outofsys">退出</a>
        </div>
        <burp-nav :items="items"></burp-nav>
      </div>
    </div>
  </header>
</template>

<script lang="babel">
import BurpNav from './BurpNav.vue'
import SubContainer from './SubNav.vue'
import nav from 'constants/nav.js'

export default {
  name: 'BurpHeader',
  components: {
    BurpNav,
    SubContainer
  },
  data () {
    return {
      items: nav
    }
  }
}
</script>
