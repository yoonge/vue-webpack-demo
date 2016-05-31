<template>
  <div>
    <section class="bd1200 clearfix">
      <div class="temp_top noselect">
        <h3>任务列表</h3>
      </div>
      <div class="temp_content">
        <table-component :table_data="table_data"></table-component>
      </div>
    </section>
  </div>
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
        manipulate: {
          '查看': '#!'
        },
        cols: [
          {
            field: 'id',
            width: '96',
            text: '漏洞 ID'
          },
          {
            field: 'target',
            width: '',
            text: '漏洞地址',
            linkPrefix: '#!'
          },
          {
            field: 'mode',
            width: '180',
            text: '漏洞类型'
          },
          {
            field: 'createTime',
            width: '96',
            text: '启动时间'
          },
          {
            field: 'status',
            width: '80',
            text: '检测状态'
          },
          {
            field: 'manipulate',
            width: '96',
            text: '操作'
          }
        ],
        rows: []
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
        beforeSend () {
          this.$set('table_data.loading', true)
        }
      }).then(res => {
        this.$set('table_data.rows', res.data)
        this.$set('table_data.loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    }
  }
}
</script>
