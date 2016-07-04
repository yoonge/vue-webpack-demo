<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_top noselect">
        <h3>黑名单配置</h3>
        <div class="rightWrap">
          <a class="mybtn" href="javascript:;">新增黑名单</a>
        </div>
      </div>
      <table-component :table_data="table_data"></table-component>
    </div>
  </section>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'SystemBlock',
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
          '编辑': '#!',
          '删除': '#!'
        },
        cols: [
          {
            field: 'id',
            width: '',
            text: 'ID'
          },
          {
            field: 'config',
            width: '',
            text: '黑名单配置',
            linkPrefix: '#!'
          },
          {
            field: 'blackType',
            width: '',
            text: '黑名单类型'
          },
          {
            field: 'addTime',
            width: '',
            text: '添加时间'
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
    this.fetchBlockList()
  },
  methods: {
    fetchBlockList () {
      this.$http({
        url: api.blockList,
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
