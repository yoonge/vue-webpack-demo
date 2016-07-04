<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_top">
        <h3>系统配额</h3>
      </div>
      <div class="temp_con pd1">
        <ul class="info-list">
          <li>最大用户数：50 人</li>
          <li>当前用户数：10 人</li>
          <li>最大在线人数：10 人</li>
          <li>当前在线人数：1 人</li>
          <li>服务到期：2016-01-01</li>
        </ul>
      </div>

      <div class="temp_top">
        <h3>在线用户列表</h3>
      </div>
      <table-component :table_data="table_data"></table-component>
    </div>
  </section>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'SystemStatus',
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
            field: 'userName',
            width: '',
            text: '用户名'
          },
          {
            field: 'email',
            width: '',
            text: '邮箱',
            linkPrefix: 'mailto:'
          },
          {
            field: 'timeLength',
            width: '96',
            text: '在线时长'
          }
        ],
        rows: []
      }
    }
  },
  ready () {
    this.fetchOnlineUserList()
  },
  methods: {
    fetchOnlineUserList () {
      this.$http({
        url: api.onlineUserList,
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
