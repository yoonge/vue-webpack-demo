<template>
  <div class="ui-table ui-table--hasData ui-table--strip">
    <div class="ui-table__content">
      <div class="spinner-wrapper" :class="{'show': table_data.loading}">
        <clip-loader></clip-loader>
      </div>
      <table>
        <thead>
          <tr>
            <th width="48" v-if="table_data.selectAble"><input type="checkbox"></th>
            <th v-for="(key, val) in table_data.theadData" width="{{val}}">{{key}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table_data.tbodyData | limitBy table_data.limit[0] tableData.limit[1]">
            <td v-if="table_data.selectAble"><input type="checkbox"></td>
            <td v-for="(key, val) in row | formatCol | colFilter table_data.cols" track-by="$index">
              <div v-if="key == 'bugs'">
                <span><i class="ic_bug"></i>{{val.highNum}}</span>
                <span><i class="ic_bug ic_bug1"></i>{{val.midNum}}</span>
                <span><i class="ic_bug ic_bug2"></i>{{val.lowNum}}</span>
                <span><i class="ic_bug ic_bug3"></i>{{val.riskNum}}</span>
              </div>
              <template v-else>{{{val | isLink key table_data.linkField}}}</template>
            </td>
            <td class="manipulate" v-if="table_data.manipulate && table_data.manipulate != ''">
              <template v-for="(k, v) in table_data.manipulate">
                <tooltip
                  effect="scale"
                  placement="top"
                  content="查看"
                  v-if="k == 'lookOver'">
                    <a href="#!"><span class="ui-icon {{v}}"></span></a>
                </tooltip>
              </template>
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
import { tooltip } from 'vue-strap'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'TableComponent',
  components: {
    tooltip,
    ClipLoader
  },
  props: {
    table_data: {}
  }
}
</script>
