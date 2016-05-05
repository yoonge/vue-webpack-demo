<template>
  <div class="ui-table__content">
    <table>
      <thead>
        <tr>
          <th v-for="th in table_data.thead_data">{{th}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in table_data.tbody_data">
          <th v-for="(key, td) in tr | colFilter key keys">{{td}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="babel">
import Vue from 'vue'

Vue.filter('colFilter', function (val, k, ks) {
  if (ks.findIndex(item => item === k) > -1) return val
})

export default {
  name: 'TableComponent',
  props: {
    keys: [],
    table_data: {}
  }
}
</script>
