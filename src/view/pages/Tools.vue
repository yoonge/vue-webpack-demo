<template>
  <div>
    <sub-nav :item="items[3]"></sub-nav>
    <router-view
      class="main"
      :transition="effect"
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script lang="babel">
import SubNav from 'components/SubNav.vue'
import nav from 'constants/nav.js'

export default {
  name: 'Tools',
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
