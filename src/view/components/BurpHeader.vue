<template>
  <header>
    <div class="site-header-main">
      <div class="site-header-bd bd1200">
        <a class="logo_part noselect">云智测</a>
        <div class="login_info">
          <a href="javascript:;" class="login-user"><i class="touxiang tx01"></i>李铁柱(测试组)</a>|<a href="login.html" class="outofsys">退出</a>
        </div>
        <burp-nav :items="items"></burp-nav>
      </div>
    </div>
    <sub-container :items="items"></sub-container>
  </header>
</template>

<script lang="babel">
import BurpNav from './BurpNav.vue'
import SubContainer from './SubContainer.vue'
import nav from '../../constants/nav.js'

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

<style>
  .site-header-main { background: rgba(0,0,0,0.2); -pie-background:rgba(0,0,0,.2); min-width: 1200px;}
  .site-header-bd .logo_part{ width: 96px; height: 59px; display: inline-block; font-size: 18px; line-height: 59px; color: #fff;}
  .site-header-bd .login_info{ float: right; height: 59px; line-height: 59px; color: rgba(255,255,255,0.1);}
  .login_info .login-user{ margin-right: 10px;}
  .login_info .outofsys{ margin-left: 10px;}
  .touxiang{ vertical-align: middle; width: 25px; height: 25px; display: inline-block; background: #fff; margin-right: 5px;}
  .touxiang.tx01 { background: url(../../assets/img/tx01.png) no-repeat; }
</style>
