<template>
  <div class="snav-main">
    <div class="snav-bd bd1200">
      <nav class="snav noselect">
        <sub-nav
          v-for="item in items"
          :item="item"
          :index="$index">
        </sub-nav>
      </nav>
      <search></search>
    </div>
  </div>
</template>

<script lang="babel">
import SubNav from './SubNav.vue'
import Search from './Search.vue'

export default {
  name: 'SubContainer',
  components: {
    SubNav,
    Search
  },
  props: {
    items: {}
  }
}
</script>
