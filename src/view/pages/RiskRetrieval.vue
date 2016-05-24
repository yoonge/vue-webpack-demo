<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con pd5">
        <dl class="clearfix">
          <dd>
            <span class="lfname">风险级别</span>
            <select class="lfselect" v-model="riskLevel">
              <option value="0">高危</option>
              <option value="1">中危</option>
              <option value="2">低危</option>
              <option value="3">无风险</option>
            </select>
            <span class="lfname">风险类型</span>
            <select class="lfselect" v-model="riskType">
              <option value="0">SQL 注入漏洞</option>
              <option value="1">服务允许匿名登录</option>
            </select>
            <span class="lfname">请求 ID</span>
            <input type="text" class="form-control" v-model="reqId">
          </dd>
          <dd>
            <span class="lfname">开始时间</span>
            <input type="text" class="form-control" v-model="startTime">
            <span class="lfname">结束时间</span>
            <input type="text" class="form-control" v-model="endTime">
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
        linkField: [
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
        theadData: {
          '漏洞 ID': '96',
          '风险地址': '45%',
          '风险级别': '80',
          '风险类型': '',
          '发现时间': '180',
          '任务 ID': '96'
        },
        tbodyData: []
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
        this.$set('table_data.tbodyData', res.data)
        this.$set('table_data.loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    }
  }
}
</script>
