<template>
  <section class="bd1200">
    <div class="temp_top noselect">
      <h3>任务列表</h3>
    </div>
    <div class="temp_content">
      <table-component :table_data="table_data"></table-component>
    </div>
  </section>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'RegressionTest',
  components: {
    TableComponent
  },
  data () {
    return {
      table_data: {
        limit: [10, 0],
        loading: false,
        selectAble: false,
        pagination: true,
        cols: [
          'id',
          'target',
          'mode',
          'createTime',
          'status',
          'manipulate'
        ],
        linkField: {
          'target': ''
        },
        manipulate: {
          '查看': 'ui-icon--eye'
        },
        theadData: {
          '漏洞 ID': '96',
          '漏洞地址': '',
          '漏洞类型': '80',
          '启动时间': '180',
          '检测状态': '80',
          '操作': '96'
        },
        tbodyData: []
      }
    }
  },
  ready () {
    this.fetchTaskListAll()
  },
  methods: {
    fetchTaskListAll () {
      this.$http({
        url: api.taskListAll,
        method: 'GET',
        beforeSend: function () {
          this.$set('table_data.loading', true)
        }
      }).then(res => {
        this.$set('table_data.tbodyData', res.data)
        this.$set('table_data.loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    }
  }
}
</script>
