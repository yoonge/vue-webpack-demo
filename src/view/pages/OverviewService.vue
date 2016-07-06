<template>
  <div>
    <section class="bd1200">
      <div class="row">
        <div class="col-xs-3">
          <div class="dashboard-pannel">
            <div class="pannel-header">
              <h3>项目配置</h3>
              <tooltip
                effect="scale"
                placement="top"
                content="配置">
                <a class="mybtnpic" href="javascript:;"><i class="ui-icon ui-icon--settings"></i></a>
              </tooltip>
              <tooltip
                effect="scale"
                placement="top"
                content="新增">
                <a class="mybtnpic" href="javascript:;"><i class="ui-icon ui-icon--plus"></i></a>
              </tooltip>
            </div>
            <div class="pannel-content clearfix">
              <i class="ui-icon-lg ui-icon--stack"></i>
              <span class="dashboard-data">86</span>
            </div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="dashboard-pannel">
            <div class="pannel-header">
              <h3>任务数</h3>
              <tooltip
                effect="scale"
                placement="top"
                content="新增">
                <a class="mybtnpic" href="javascript:;"><i class="ui-icon ui-icon--plus"></i></a>
              </tooltip>
            </div>
            <div class="pannel-content clearfix">
              <i class="ui-icon-lg ui-icon--map"></i>
              <span class="dashboard-data">86</span>
            </div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="dashboard-pannel">
            <div class="pannel-header">
              <h3>测试请求数</h3>
            </div>
            <div class="pannel-content clearfix">
              <i class="ui-icon-lg ui-icon--globe"></i>
              <span class="dashboard-data">2023</span>
            </div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="dashboard-pannel">
            <div class="pannel-header">
              <h3>发现问题数</h3>
              <tooltip
                effect="scale"
                placement="top"
                content="设置">
                <a class="mybtnpic" href="javascript:;"><i class="ui-icon ui-icon--settings"></i></a>
              </tooltip>
            </div>
            <div class="pannel-content clearfix">
              <i class="ui-icon-lg ui-icon--bug"></i>
              <span class="dashboard-data">86</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bd1200 mb30">
      <div class="row">
        <div class="col-xs-6">
          <div class="pannel-header">
            <h3>近期任务</h3>
            <div class="rightWrap">
              <a class="mybtn" href="javascript:;">任务管理</a>
            </div>
          </div>
          <table-component :table_data="table_data"></table-component>
        </div>
        <div class="col-xs-6">
          <div class="pannel-header">
            <h3>风险动态</h3>
          </div>
          <table-component :table_data="table_data1"></table-component>
        </div>
      </div>
    </section>

    <section class="bd1200">
      <div class="row">
        <div class="col-xs-6">
          <div class="pannel-header">
            <h3>动态</h3>
          </div>
          <div class="pd1 temp_con">
            <div class="update_log">
              <span class="linetop"></span>
              <dl>
                <dd>
                  <span>2015-01-02 16:22</span>
                  <ul>
                    <li>任务 http://www.qq.com 发现 <a href="javascript:;">sql注入安全问题</a></li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-01-02 16:22</span>
                  <ul>
                    <li>新建一个网站测试项目 <a href="javascript:;">http://www.test.com</a></li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-01-02 16:22</span>
                  <ul>
                    <li>启动一个测试项目 <a href="javascript:;">http://www.aa.com</a></li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-01-02 16:22</span>
                  <ul>
                    <li>新建一个网站测试项目 <a href="javascript:;">http://www.test.com</a></li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-01-02 16:22</span>
                  <ul>
                    <li>启动一个测试项目 <a href="javascript:;">http://www.aa.com</a></li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-01-02 16:22</span>
                  <ul>
                    <li>启动一个测试项目 <a href="javascript:;">http://www.aa.com</a></li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="pannel-header">
            <h3>产品更新</h3>
            <div class="rightWrap">
              <a class="mybtn" href="javascript:;">查看所有</a>
            </div>
          </div>
          <div class="pd1 temp_con">
            <div class="update_log">
              <span class="linetop"></span>
              <dl>
                <dd>
                  <span>2015-12-11 16:22:22</span>
                  <ul>
                    <li>1.0.1 版本升级更新</li>
                    <li>修复一个操作日志的bug</li>
                    <li>升级策略库，支持SQL注入检测</li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-12-11 16:22:22</span>
                  <ul>
                    <li>1.0.1 版本升级更新</li>
                    <li>修复一个操作日志的bug</li>
                    <li>升级策略库，支持SQL注入检测</li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-12-11 16:22:22</span>
                  <ul>
                    <li>1.0.1 版本升级更新</li>
                    <li>修复一个操作日志的bug</li>
                    <li>升级策略库，支持SQL注入检测</li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
                <dd>
                  <span>2015-12-11 16:22:22</span>
                  <ul>
                    <li>1.0.1 版本升级更新</li>
                    <li>修复一个操作日志的bug</li>
                    <li>升级策略库，支持SQL注入检测</li>
                  </ul>
                  <span class="line"></span>
                  <span class="icon_quan"><span class="quan_quan"></span></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import { tooltip } from 'vue-strap'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'OverviewService',
  components: {
    tooltip,
    TableComponent
  },
  data () {
    return {
      table_data: {
        limit: [5, 0],
        loading: false,
        selectAble: false,
        pagination: false,
        cols: [
          {
            field: 'id',
            width: '80',
            text: '任务 ID'
          },
          {
            field: 'target',
            width: '',
            text: '任务目标',
            linkPrefix: '#!'
          },
          {
            field: 'bugs',
            width: '160',
            text: '漏洞数'
          },
          {
            field: 'createTime',
            width: '88',
            text: '启动时间'
          },
          {
            field: 'status',
            width: '72',
            text: '状态'
          }
        ],
        rows: []
      },
      table_data1: {
        limit: [5, 0],
        loading: false,
        selectAble: false,
        pagination: false,
        cols: [
          {
            field: 'id',
            width: '80',
            text: '风险 ID'
          },
          {
            field: 'target',
            width: '',
            text: '目标地址',
            linkPrefix: '#!'
          },
          {
            field: 'type',
            width: '',
            text: '漏洞类型'
          },
          {
            field: 'time',
            width: '96',
            text: '发现时间'
          }
        ],
        rows: [
          {
            id: '123456',
            target: 'http://burp.wooyun.org/#/task/bug/572c22fd1d41c8127b914a7a',
            type: '敏感信息泄露',
            time: '2016-05-01'
          },
          {
            id: '123',
            target: '13',
            type: 'SQL 注入',
            time: '2016-05-01'
          },
          {
            id: '123456',
            target: '9',
            type: 'SQL 注入',
            time: '2016-05-01'
          },
          {
            id: '123',
            target: '13',
            type: '服务器错误配置',
            time: '2016-05-01'
          },
          {
            id: '123456',
            target: '9',
            type: 'SQL 注入',
            time: '2016-05-01'
          }
        ]
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
