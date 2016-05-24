<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con pd5">
        <dl class="clearfix">
          <dd>
            <span class="lfname">风险级别</span>
            <select class="lfselect" v-model="risk_level">
              <option value="0">高危</option>
              <option value="1">中危</option>
              <option value="2">低危</option>
              <option value="3">无风险</option>
            </select>
            <span class="lfname">风险类型</span>
            <select class="lfselect" v-model="risk_type">
              <option value="0">SQL 注入漏洞</option>
              <option value="1">服务允许匿名登录</option>
            </select>
            <span class="lfname">请求 ID</span>
            <input type="text" class="form-control" v-model="req_id">
          </dd>
          <dd>
            <span class="lfname">开始时间</span>
            <input type="text" class="form-control" v-model="start_time">
            <span class="lfname">结束时间</span>
            <input type="text" class="form-control" v-model="end_time">
            <form role="search">
              <span class="lfname">关键词</span>
              <input type="text" class="form-control" v-model="keyword">
              <button class="searchbtn" type="button"></button>
            </form>
          </dd>
        </dl>
      </div>

      <div class="temp_content">
        <table-component :table_data="table_data"></table-component>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'RiskRetrieval',
  components: {
    TableComponent
  },
  data () {
    return {
      risk_level: '0',
      risk_type: '0',
      req_id: '',
      start_time: '',
      end_time: '',
      keyword: '',
      table_data: {
        limit: [10, 0],
        loading: false,
        select_able: false,
        pagination: true,
        link_field: [
          'url'
        ],
        cols: [
          'id',
          'url',
          'harmlevel',
          'vulType',
          'addTime',
          'taskid'
        ],
        thead_data: {
          '漏洞 ID': '96',
          '风险地址': '45%',
          '风险级别': '48',
          '风险类型': '',
          '发现时间': '180',
          '任务 ID': '96'
        },
        tbody_data: []
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
        beforeSend: function () {
          this.$set('table_data.loading', true)
        }
      }).then(res => {
        this.$set('table_data.tbody_data', res.data)
        this.$set('table_data.loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    }
  }
}
</script>
