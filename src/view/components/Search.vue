<template>
  <form id="search-form" class="navbar-form fr" role="search">
    <input type="search" class="form-control search-query" placeholder="{{keyword}}">
  </form>
</template>

<script lang="babel">
export default {
  name: 'Search',
  data () {
    return {
      keyword: '搜索...'
    }
  }
}
</script>
