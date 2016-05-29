<template>
  <section class="bd1200">
    <div class="temp_top noselect">
      <h3>日志管理</h3>
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
  name: 'SystemLogs',
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
          'userName',
          'userLevel',
          'action',
          'addTime',
          'ip'
        ],
        theadData: {
          '日志 ID': '96',
          '用户': '',
          '角色': '',
          '系统行为': '',
          '操作时间': '',
          '操作 IP': ''
        },
        tbodyData: []
      }
    }
  },
  ready () {
    this.fetchWiFiList()
  },
  methods: {
    fetchWiFiList () {
      this.$http({
        url: api.logList,
        method: 'GET',
        beforeSend () {
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
