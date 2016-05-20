<template>
  <div class="ui-table ui-table--hasData ui-table--strip">
    <div class="ui-table__content">
      <table>
        <thead>
          <tr>
            <th width="48" v-if="table_data.select_able"><input type="checkbox"></th>
            <th v-for="(key, val) in table_data.thead_data" width="{{val}}">{{key}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tr in table_data.tbody_data">
            <td v-if="table_data.select_able"><input type="checkbox"></td>
            <td v-for="(key, val) in tr" v-if="key | colFilter table_data.cols">
              <div v-if="key == 'bugs'">
                <span><i class="ic_bug"></i>16</span>
                <span><i class="ic_bug ic_bug1"></i>11</span>
                <span><i class="ic_bug ic_bug2"></i>11</span>
                <span><i class="ic_bug ic_bug3"></i>22</span>
              </div>
              <span v-else>{{{val | isLink 'target' key}}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ui-table__footer clearfix" v-if="table_data.pagination">
      <div class="ui-paginationCount">
        <span>共 </span><span class="ui-paginationCount__number">16</span><span> 条记录</span>
      </div>
      <ul class="ui-pagination">
        <li class="ui-pagination__previous">
          <button><span class="ui-icon ui-icon--arrow-left"></span></button>
        </li>
        <li><button class="ui--active">1</button></li>
        <li><button>2</button></li>
        <li class="ui-pagination__next">
          <button><span class="ui-icon ui-icon--arrow-right"></span></button>
        </li>
      </ul>
    </div>
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
