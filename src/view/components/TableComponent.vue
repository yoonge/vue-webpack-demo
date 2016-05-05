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
          <th v-for="td in tr">{{td}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="babel">
export default {
  name: 'TableComponent',
  props: {
    table_data: {}
  }
}
</script>
