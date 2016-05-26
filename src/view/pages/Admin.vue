<template>
  <div>
    <sub-nav :item="items[5]"></sub-nav>
    <router-view
      class="main"
      transition
      transition-mode="out-in">
    </router-view>
    <h1>Admin</h1>
  </div>
</template>

<script lang="babel">
import SubNav from 'components/SubNav.vue'
import nav from 'constants/nav.js'

export default {
  name: 'Admin',
  components: {
    SubNav
  },
  data () {
    return {
      items: nav
    }
  }
}
</script>
