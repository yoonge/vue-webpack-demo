<template>
  <div>
    <section class="bd1200 clearfix">
      <div class="search-wrapper">
        <form class="form-horizontal" role="search">
          <div class="form-group">
            <label class="col-xs-1 control-label">风险级别</label>
            <div class="col-xs-2">
              <select class="form-control" v-model="riskLevel">
                <option value="0">高危</option>
                <option value="1">中危</option>
                <option value="2">低危</option>
                <option value="3">无风险</option>
              </select>
            </div>
            <label class="col-xs-1 control-label">风险类型</label>
            <div class="col-xs-2">
              <select class="form-control" v-model="riskType">
                <option value="0">SQL 注入漏洞</option>
                <option value="1">服务允许匿名登录</option>
              </select>
            </div>
            <label class="col-xs-1 control-label">请求 ID</label>
            <div class="col-xs-5">
              <input type="text" class="form-control" v-model="reqId">
            </div>
          </div>
          <div class="form-group">
            <label class="col-xs-1 control-label">开始时间</label>
            <div class="col-xs-2">
              <input type="text" class="form-control" v-model="startTime">
            </div>
            <label class="col-xs-1 control-label">结束时间</label>
            <div class="col-xs-2">
              <input type="text" class="form-control" v-model="endTime">
            </div>
            <label class="col-xs-1 control-label">关键词</label>
            <div class="col-xs-5">
              <input type="text" class="form-control" v-model="keyword">
              <tooltip
                effect="scale"
                placement="top"
                content="搜索">
                <button class="search-btn" type="button">
                  <i class="ui-icon ui-icon--search"></i>
                </button>
              </tooltip>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="bd1200 clearfix">
      <div class="temp_content">
        <table-component :table_data="table_data"></table-component>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import { tooltip } from 'vue-strap'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'RiskRetrieval',
  components: {
    tooltip,
    TableComponent
  },
  data () {
    return {
      riskLevel: '0',
      riskType: '0',
      reqId: '',
      startTime: '',
      endTime: '',
      keyword: '',
      table_data: {
        limit: [10, 0],
        loading: false,
        selectAble: false,
        pagination: true,
        cols: [
          {
            field: 'id',
            width: '96',
            text: '漏洞 ID'
          },
          {
            field: 'url',
            width: '45%',
            text: '风险地址',
            linkPrefix: '#!'
          },
          {
            field: 'harmlevel',
            width: '80',
            text: '风险级别'
          },
          {
            field: 'vulType',
            width: '',
            text: '风险类型'
          },
          {
            field: 'addTime',
            width: '180',
            text: '发现时间'
          },
          {
            field: 'taskid',
            width: '96',
            text: '任务 ID'
          }
        ],
        rows: []
      }
    }
  },
  ready () {
    this.fetchRiskRetrieval()
  },
  methods: {
    fetchRiskRetrieval () {
      this.$http({
        url: api.riskRetrieval,
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
