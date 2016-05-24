<template>
  <div>
    <section class="bd1200">
      <div class="mytemp">
        <div class="mytemp w252 fl mr64">
          <div class="temp_top noselect clearfix">
            <h3>项目配置</h3>
            <tooltip
              effect="scale"
              placement="top"
              content="设置">
              <a class="mybtnpic mybtnpic3" href="javascript:;"></a>
            </tooltip>
            <tooltip
              effect="scale"
              placement="top"
              content="新增">
              <a class="mybtnpic mybtnpic2" href="javascript:;"></a>
            </tooltip>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo1 ui-icon--stack"></i>
            <span class="fz36">86</span>
          </div>
        </div>
        <div class="mytemp w252 fl mr64">
          <div class="temp_top noselect clearfix">
            <h3>任务数</h3>
            <tooltip
              effect="scale"
              placement="top"
              content="新增">
              <a class="mybtnpic mybtnpic2" href="javascript:;"></a>
            </tooltip>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo2 ui-icon--map"></i>
            <span class="fz36">86</span>
          </div>
        </div>
        <div class="mytemp w252 fl">
          <div class="temp_top noselect clearfix">
            <h3>测试请求数</h3>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo3 ui-icon--globe"></i>
            <span class="fz36">86</span>
          </div>
        </div>
        <div class="mytemp w252 fr">
          <div class="temp_top noselect clearfix">
            <h3>发现问题数</h3>
            <tooltip
              effect="scale"
              placement="top"
              content="设置">
              <a class="mybtnpic mybtnpic3" href="javascript:;"></a>
            </tooltip>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo4 ui-icon--bug"></i>
            <span class="fz36">86</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bd1200">
      <div class="mytemp w586 fl">
        <div class="temp_top noselect">
          <h3>近期任务</h3>
          <div class="rightWrap">
            <a class="mybtn" href="javascript:;">任务管理</a>
          </div>
        </div>
        <table-component :table_data="table_data"></table-component>
      </div>
      <div class="mytemp w586 fr">
        <div class="temp_top noselect">
          <h3>风险动态</h3>
        </div>
        <table-component :table_data="table_data1"></table-component>
      </div>
    </section>

    <section class="bd1200">
      <div class="mytemp w586 fl">
        <div class="temp_top noselect">
          <h3>动态</h3>
        </div>
        <div class="pd1 temp_con clear ht420">
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
      <div class="mytemp w586 fr">
        <div class="temp_top noselect">
          <h3>产品更新</h3>
          <div class="rightWrap">
            <a class="mybtn" href="javascript:;">查看所有</a>
          </div>
        </div>
        <div class="pd1 temp_con clear ht420">
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
        select_able: false,
        pagination: false,
        link_field: [
          'target'
        ],
        cols: [
          'id',
          'target',
          'highNum',
          'createTime',
          'status'
        ],
        thead_data: {
          '任务 ID': '80',
          '任务目标': '',
          '漏洞数': '144',
          '启动时间': '88',
          '状态': '72'
        },
        tbody_data: []
      },
      table_data1: {
        limit: [5, 0],
        loading: false,
        select_able: false,
        pagination: false,
        link_field: [
          'target'
        ],
        cols: [
          'id',
          'target',
          'type',
          'time'
        ],
        thead_data: {
          '风险 ID': '96',
          '目标地址': '',
          '漏洞类型': '',
          '发现时间': '96'
        },
        tbody_data: [
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
