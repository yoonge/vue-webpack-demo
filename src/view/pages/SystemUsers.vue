<template>
  <section class="bd1200">
    <div class="temp_top noselect">
      <h3>用户列表</h3>
      <div class="rightWrap">
        <a class="mybtn" href="javascript:;">新增用户</a>
      </div>
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
  name: 'SystemUsers',
  components: {
    TableComponent
  },
  data () {
    return {
      table_data: {
        limit: [10, 0],
        loading: false,
        selectAble: true,
        pagination: true,
        manipulate: {
          '编辑': '#!',
          '删除': '#!'
        },
        cols: [
          {
            field: 'id',
            width: '96',
            text: '用户 ID'
          },
          {
            field: 'username',
            width: '',
            text: '用户姓名'
          },
          {
            field: 'email',
            width: '',
            text: '用户邮箱',
            linkPrefix: 'mailto:'
          },
          {
            field: 'userLevel',
            width: '',
            text: '用户级别'
          },
          {
            field: 'department',
            width: '',
            text: '所属部门'
          },
          {
            field: 'mobile',
            width: '',
            text: '联系电话'
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
    this.fetchUserList()
  },
  methods: {
    fetchUserList () {
      this.$http({
        url: api.userList,
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
