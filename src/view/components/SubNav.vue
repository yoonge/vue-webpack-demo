<template>
  <div class="snav-main">
    <div class="snav-bd bd1200">
      <nav class="snav noselect">
        <ul class="cur">
          <li
            v-for="subnav in item.sub"
            :index="$index">
            <a v-link="{name: subnav.name}">{{subnav.text}}</a>
          </li>
        </ul>
      </nav>
      <search></search>
    </div>
  </div>
</template>

<script lang="babel">
import Search from './Search.vue'

export default {
  name: 'SubNav',
  components: {
    Search
  },
  props: {
    item: {}
  }
}
</script>
