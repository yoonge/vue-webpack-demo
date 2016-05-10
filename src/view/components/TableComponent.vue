<template>
  <div class="ui-table__content">
    <table>
      <thead>
        <tr>
          <th v-for="(key, val) in table_data.thead_data" width="{{val}}">{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in table_data.tbody_data">
          <td v-for="(key, td) in tr" v-if="key | colFilter table_data.cols">
            <div v-if="key == 'count'">
              <span><i class="ic_bug"></i>16</span>
              <span><i class="ic_bug ic_bug1"></i>11</span>
              <span><i class="ic_bug ic_bug2"></i>11</span>
              <span><i class="ic_bug ic_bug3"></i>22</span>
            </div>
            <span v-else>{{{td | isLink 'target' key}}}</span>
          </td>
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
