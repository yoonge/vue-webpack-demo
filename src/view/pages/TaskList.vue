<template>
  <div>
    <section class="bd1200 clearfix">
      <div class="w400 mytemplist fl noselect">
        <div class="temp_top">
          <a v-link="'/project/add'" class="mybtn"><i class="ui-icon ui-icon--plus"></i> 新增任务</a>
          <form id="search-form1" class="navbar-form fr list_search" role="search">
            <input type="search" class="search-query" placeholder="在下列任务中搜索" v-model="searchText">
          </form>
        </div>
        <div class="my_rwlb" id="slimScroll">
          <div class="spinner-wrapper" :class="{'show': loading}">
            <clip-loader></clip-loader>
          </div>
          <dl>
            <dd v-for="task in tasks | filterBy searchText">
              <div class="my_rwname">{{task.url}}</div>
              <div class="my_rwpercent fr">{{task.percent}}</div>
              <div class="my_rwmarks">
                <div>{{task.date}}</div>
                <div class="rwmark-n">{{task.department}} - {{task.user}}</div>
                <div class="rwmark-mk bugs">
                  <span><i class="ui-icon ui-icon--bug text-red"></i>{{task.high}}</span>
                  <span><i class="ui-icon ui-icon--bug text-orange"></i>{{task.middle}}</span>
                  <span><i class="ui-icon ui-icon--bug text-beige"></i>{{task.low}}</span>
                  <span><i class="ui-icon ui-icon--bug text-grey"></i>{{task.hint}}</span>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div class=" w775 fr clearfix">
        <div class="temp_top noselect">
          <h3>基础信息</h3>
          <tooltip
            effect="scale"
            placement="top"
            content="保存">
            <a href="javascript:;" class="mybtnpic"></a>
          </tooltip>
          <tooltip
            effect="scale"
            placement="top"
            content="暂停">
            <a href="javascript:;" class="mybtnpic mybtnpic4"></a>
          </tooltip>
        </div>

        <div class="temp_con pd2 ld">
          <dl>
            <dd>测试目标：<a href="javascript:;" target="_blank">{{taskBasicInfo.target}}</a></dd>
            <dd>任务类型：{{taskBasicInfo.type}}</dd>
            <dd>任务归属：{{taskBasicInfo.user}}</dd>
            <dd>
              开始时间：{{taskBasicInfo.startTime}}
              <div class="my_rwmarks fr">
                <div class="bugs">
                  <span><i class="ui-icon ui-icon--bug text-red"></i>{{taskBasicInfo.high}}</span>
                  <span><i class="ui-icon ui-icon--bug text-orange"></i>{{taskBasicInfo.middle}}</span>
                  <span><i class="ui-icon ui-icon--bug text-beige"></i>{{taskBasicInfo.low}}</span>
                  <span><i class="ui-icon ui-icon--bug text-grey"></i>{{taskBasicInfo.hint}}</span>
                </div>
              </div>
            </dd>
          </dl>
          <div class="ld_notice w775 text-orange"><i class="ui-icon ui-icon--bug text-orange"></i> 中危！一定条件下攻击者通过这些漏洞可能会攻击 到你的数据中心</div>
        </div>

        <div class="mywrap clearfix">
          <div class="w244 mr20 fl">
            <div class="temp_top">
              <h3>检测状态分布图</h3>
            </div>
            <div class="temp_content">
              <doughnut-chart
                :labels="labels1"
                :datasets="datasets1"
                :options="options"
              ></doughnut-chart>
            </div>
          </div>
          <div class="w244 fl">
            <div class="temp_top">
              <h3>请求类型分布图</h3>
            </div>
            <div class="temp_content">
              <doughnut-chart
                :labels="labels2"
                :datasets="datasets2"
                :options="options"
              ></doughnut-chart>
            </div>
          </div>
          <div class="w244 fr">
            <div class="temp_top">
              <h3>请求文件类型分布图</h3>
            </div>
            <div class="temp_content">
              <doughnut-chart
                :labels="labels3"
                :datasets="datasets3"
                :options="options"
              ></doughnut-chart>
            </div>
          </div>
          <div class="w244 mr20 fl">
            <div class="temp_top">
              <h3>请求状态分布</h3>
            </div>
            <div class="temp_content">
              <doughnut-chart
                :labels="labels4"
                :datasets="datasets4"
                :options="options"
              ></doughnut-chart>
            </div>
          </div>
          <div class="w244 fl">
            <div class="temp_top">
              <h3>风险状态分布图</h3>
            </div>
            <div class="temp_content">
              <doughnut-chart
                :labels="labels5"
                :datasets="datasets5"
                :options="options"
              ></doughnut-chart>
            </div>
          </div>
          <div class="w244 fr">
            <div class="temp_top">
              <h3>请求数量/时间分布图</h3>
            </div>
            <div class="temp_content">
              <line-chart
                :labels="labels6"
                :datasets="datasets6"
                :options="options"
              ></line-chart>
            </div>
          </div>
        </div>

        <div>
          <div class="temp_top noselect">
            <h3>请求数据流</h3>
            <a href="dcbg.html">(查看检测报告)</a>
            <div class="rightWrap">
              <a class="mybtn noclick" href="javascript:;">调试该请求</a>
            </div>
          </div>
          <div class="ui-table ui-table--hasData ui-table--strip">
            <div class="ui-table__content">
              <div class="tablecheck">
                <span class="myrediowrap">
                  <span class="myredio" rel="1"><i class="ic_kuang ic_kuangok"></i>显示静态文件</span>
                  <span class="myredio" rel="0"><i class="ic_kuang"></i>显示重复的请求</span>
                  <input type="hidden" value="1" id="">
                </span>
              </div>
              <table>
                <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    Resut
                  </th>
                  <th style="width:12em;">
                    Host
                  </th>
                  <th style="width:12em;">
                    URL
                  </th>
                  <th>
                    Method
                  </th>
                  <th>
                    Process
                  </th>
                  <th>
                    Taskid
                  </th>
                  <th>
                    状态
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    5201314
                  </td>
                  <td>
                    200
                  </td>
                  <td>
                    www.baidu.com
                  </td>
                  <td>
                    /corp?actiontype=riskrep&bocaige=xiaosa
                  </td>
                  <td>
                    GET
                  </td>
                  <td>
                    firefox
                  </td>
                  <td>
                    6888
                  </td>
                  <td>
                    待检测
                  </td>
                </tr>
                <tr>
                  <td>
                    5201314
                  </td>
                  <td>
                    200
                  </td>
                  <td>
                    www.baidu.com
                  </td>
                  <td>
                    /corp?actiontype=riskrep&bocaige=xiaosa
                  </td>
                  <td>
                    GET
                  </td>
                  <td>
                    firefox
                  </td>
                  <td>
                    6888
                  </td>
                  <td>
                    待检测
                  </td>
                </tr>
                <tr>
                  <td>
                    5201314
                  </td>
                  <td>
                    200
                  </td>
                  <td>
                    www.baidu.com
                  </td>
                  <td>
                    /corp?actiontype=riskrep&bocaige=xiaosa
                  </td>
                  <td>
                    GET
                  </td>
                  <td>
                    firefox
                  </td>
                  <td>
                    6888
                  </td>
                  <td>
                    待检测
                  </td>
                </tr>
                <tr>
                  <td>
                    5201314
                  </td>
                  <td>
                    200
                  </td>
                  <td>
                    www.baidu.com
                  </td>
                  <td>
                    /corp?actiontype=riskrep&bocaige=xiaosa
                  </td>
                  <td>
                    GET
                  </td>
                  <td>
                    firefox
                  </td>
                  <td>
                    6888
                  </td>
                  <td>
                    待检测
                  </td>
                </tr>
                <tr>
                  <td>
                    5201314
                  </td>
                  <td>
                    200
                  </td>
                  <td>
                    www.baidu.com
                  </td>
                  <td>
                    /corp?actiontype=riskrep&bocaige=xiaosa
                  </td>
                  <td>
                    GET
                  </td>
                  <td>
                    firefox
                  </td>
                  <td>
                    6888
                  </td>
                  <td>
                    待检测
                  </td>
                </tr>
                <tr>
                  <td>
                    5201314
                  </td>
                  <td>
                    200
                  </td>
                  <td>
                    www.baidu.com
                  </td>
                  <td>
                    /corp?actiontype=riskrep&bocaige=xiaosa
                  </td>
                  <td>
                    GET
                  </td>
                  <td>
                    firefox
                  </td>
                  <td>
                    6888
                  </td>
                  <td>
                    待检测
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
import $ from 'jquery'
import * as api from 'src/api.js'
import { LineChart, DoughnutChart } from 'vue-chart.js'
import { tooltip } from 'vue-strap'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'TaskList',
  components: {
    tooltip,
    ClipLoader,
    LineChart,
    DoughnutChart
  },
  data () {
    return {
      searchText: '',
      loading: false,
      tasks: [],
      taskBasicInfo: {},
      options: {
        legend: {
          display: false
        },
        elements: {
          line: {
            borderWidth: 1,
            borderColor: 'white'
          }
        }
      },
      labels1: ['已检测'],
      datasets1: [{
        borderWidth: 0,
        backgroundColor: ['#6e84d6'],
        data: [27]
      }],
      labels2: ['GET'],
      datasets2: [{
        borderWidth: 0,
        backgroundColor: ['#60d4ae'],
        data: [27]
      }],
      labels3: ['Other'],
      datasets3: [{
        borderWidth: 0,
        backgroundColor: ['#669fd2'],
        data: [27]
      }],
      labels4: ['Null'],
      datasets4: [{
        borderWidth: 0,
        backgroundColor: ['#ffe073'],
        data: [27]
      }],
      labels5: ['低危'],
      datasets5: [{
        borderWidth: 0,
        backgroundColor: ['#ffb440'],
        data: [9]
      }],
      labels6: ['', '051814'],
      datasets6: [{
        label: '请求数量 / 时间分布',
        data: [0, 160]
      }]
    }
  },
  ready () {
    this.fetchTasks()
    this.fetchTaskBasicInfo()
  },
  methods: {
    fetchTasks () {
      this.$http({
        url: api.taskList,
        method: 'GET',
        beforeSend () {
          this.$set('loading', true)
        }
      }).then(res => {
        this.$set('tasks', res.data)
        $('#slimScroll').slimScroll({ height: '600px' })
        this.$set('loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    },
    fetchTaskBasicInfo () {
      this.$http({
        url: api.taskBasicInfo,
        method: 'GET',
        beforeSend () {
          this.$set('loading', true)
        }
      }).then(res => {
        this.$set('taskBasicInfo', res.data)
        this.$set('loading', false)
      }).catch(err => {
        console.error(err.data)
      })
    }
  }
}
</script>

<style>
.temp_content {
  background-color: rgba(0, 0, 0, .3);
  padding: 20px 0;
}
</style>
