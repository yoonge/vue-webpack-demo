<template>
  <ul :class="{'cur': isCur}">
    <li
      v-for="sub in item.sub"
      :index="$index">
      <a v-link="{name: sub.name}">{{sub.text}}</a>
    </li>
  </ul>
</template>

<script lang="babel">
export default {
  name: 'SubNav',
  props: {
    item: {}
  },
  data () {
    return {
      isCur: true
    }
  }
}
</script>
