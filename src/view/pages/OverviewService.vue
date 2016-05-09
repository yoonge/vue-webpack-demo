<template>
  <div>
    <section class="bd1200">
      <div class="mytemp">
        <div class="mytemp w252 fl mr64">
          <div class="temp_top noselect">
            <h3>项目配置</h3>
            <div class="rightWrap">
              <a class="mybtnpic mybtnpic2" href="javascript:;" dis="新增"></a>
              <a class="mybtnpic mybtnpic3" href="javascript:;" dis="设置"></a>
            </div>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo1 ui-icon--stack"></i>
            <span class="fz36">86</span>
          </div>
        </div>
        <div class="mytemp w252 fl mr64">
          <div class="temp_top noselect">
            <h3>任务数</h3>
            <div class="rightWrap">
              <a class="mybtnpic mybtnpic2" href="javascript:;" dis="新增"></a>
            </div>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo2 ui-icon--map"></i>
            <span class="fz36">86</span>
          </div>
        </div>
        <div class="mytemp w252 fl">
          <div class="temp_top noselect">
            <h3>测试请求数</h3>
            <div class="rightWrap">
              <a class="mybtnpic mybtnpic3" href="javascript:;" dis="设置"></a>
            </div>
          </div>
          <div class="temp_con">
            <i class="ic_demo ic_demo3 ui-icon--globe"></i>
            <span class="fz36">86</span>
          </div>
        </div>
        <div class="mytemp w252 fr">
          <div class="temp_top noselect">
            <h3>发现问题数</h3>
            <div class="rightWrap">
              <a class="mybtnpic mybtnpic3" href="javascript:;" dis="设置"></a>
            </div>
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
        <div class="ui-table ui-table--hasData ui-table--strip">
          <table-component :table_data="table_data"></table-component>
        </div>
      </div>
      <div class="mytemp w586 fr">
        <div class="temp_top noselect">
          <h3>风险动态</h3>
        </div>
        <div class="ui-table ui-table--hasData ui-table--strip">
          <table-component :table_data="table_data1"></table-component>
        </div>
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

            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'OverviewService',
  components: {
    TableComponent
  },
  data () {
    return {
      table_data: {
        keys: [
          'id',
          'target',
          'count',
          'time',
          'status'
        ],
        thead_data: [
          '任务 ID',
          '任务目标',
          '漏洞数',
          '启动时间',
          '状态'
        ],
        tbody_data: [
          {
            id: '123456',
            target: 'sangebaimao.com',
            count: '2',
            time: '3',
            status: '4'
          },
          {
            id: '123',
            target: '5',
            count: '6',
            time: '7',
            status: '8'
          },
          {
            id: '123456',
            target: '1',
            count: '2',
            time: '3',
            status: '4'
          },
          {
            id: '123',
            target: '5',
            count: '6',
            time: '7',
            status: '8'
          },
          {
            id: '123456',
            target: '1',
            count: '2',
            time: '3',
            status: '4'
          }
        ]
      },
      table_data1: {
        keys: [
          'id',
          'target',
          'type',
          'time'
        ],
        thead_data: [
          '风险 ID',
          '目标地址',
          '漏洞类型',
          '发现时间'
        ],
        tbody_data: [
          {
            id: '123456',
            target: 'http://burp.wooyun.org/#/task/bug/572c22fd1d41c8127b914a7a',
            type: '10',
            time: '11'
          },
          {
            id: '123',
            target: '13',
            type: '14',
            time: '15'
          },
          {
            id: '123456',
            target: '9',
            type: '10',
            time: '11'
          },
          {
            id: '123',
            target: '13',
            type: '14',
            time: '15'
          },
          {
            id: '123456',
            target: '9',
            type: '10',
            time: '11'
          }
        ]
      }
    }
  }
}
</script>
