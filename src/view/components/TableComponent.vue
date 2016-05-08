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
          <td v-for="(key, td) in tr" v-if="key | colFilter table_data.keys">{{td}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="babel">
import 'src/view/filters.js'

export default {
  name: 'TableComponent',
  props: {
    table_data: {}
  }
}
</script>
