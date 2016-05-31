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
          {
            field: 'id',
            width: '96',
            text: '日志 ID'
          },
          {
            field: 'userName',
            width: '',
            text: '用户'
          },
          {
            field: 'userLevel',
            width: '',
            text: '角色'
          },
          {
            field: 'action',
            width: '',
            text: '系统行为'
          },
          {
            field: 'addTime',
            width: '',
            text: '操作时间'
          },
          {
            field: 'ip',
            width: '',
            text: '操作 IP'
          }
        ],
        rows: []
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
        this.$set('table_data.rows', res.data)
        this.$set('table_data.loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    }
  }
}
</script>
