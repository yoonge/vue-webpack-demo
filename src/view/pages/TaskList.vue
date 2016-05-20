<template>
  <div>
    <section class="bd1200">
      <div class="mytemp w400 mytemplist fl noselect">
        <div class="temp_top">
          <a v-link="'/project/add'" class="mybtn">+&nbsp;新增任务</a>
          <form id="search-form1" class="navbar-form fr list_search" role="search">
            <input type="search" class="search-query" placeholder="在下列任务中搜索" v-model="searchText">
          </form>
        </div>
        <vue-scrollbar classes="my_rwlb" v-bind:speed=200>
          <dl>
            <dd v-for="task in tasks | filterBy searchText">
              <div class="my_rwname">{{task.url}}</div>
              <div class="my_rwpercent fr">{{task.percent}}</div>
              <div class="my_rwmarks">
                <div>{{task.date}}</div>
                <div class="rwmark-n">{{task.department}} - {{task.user}}</div>
                <div class="rwmark-mk">
                  <span><i class="ic_bug "></i>{{task.high}}</span>
                  <span><i class="ic_bug ic_bug1"></i>{{task.middle}}</span>
                  <span><i class="ic_bug ic_bug2"></i>{{task.low}}</span>
                  <span><i class="ic_bug ic_bug3"></i>{{task.hint}}</span>
                </div>
              </div>
            </dd>
          </dl>
        </vue-scrollbar>
      </div>

      <div class="mytemp w775 fr clearfix">
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
            <dd>测试目标：<a href="javascript:;" target="_blank">http://www.baidu.com</a></dd>
            <dd>任务类型：网站任务</dd>
            <dd>任务归属：李铁柱</dd>
            <dd>
              开始时间：2016-01-01  17:22:19
              <div class="my_rwmarks fr">
                <div>
                  <span><i class="ic_bug "></i>16</span>&nbsp;
                  <span><i class="ic_bug ic_bug1"></i>11</span>&nbsp;
                  <span><i class="ic_bug ic_bug2"></i>11</span>&nbsp;
                  <span><i class="ic_bug ic_bug3"></i>22</span>
                </div>
              </div>
            </dd>
          </dl>
          <div class="ld_notice mycolor-warning w775"><i class="ic_bug ic_bug1"></i>中危！一定条件下攻击者通过这些漏洞可能会攻击 到你的数据中心</div>
        </div>

        <div class="mywrap clearfix">
          <div class="mytemp w244 mr20 fl">
            <div class="temp_top noselect">
              <h3>检测状态分布图</h3>
            </div>
            <div class="temp_content">
              柱状图示1
            </div>
          </div>
          <div class="mytemp w244 fl">
            <div class="temp_top noselect">
              <h3>请求类型分布图</h3>
            </div>
            <div class="temp_content">
              柱状图示2
            </div>
          </div>
          <div class="mytemp w244 fr">
            <div class="temp_top noselect">
              <h3>请求文件类型分布图</h3>
            </div>
            <div class="temp_content">
              柱状图示3
            </div>
          </div>
          <div class="mytemp w244 mr20 fl">
            <div class="temp_top noselect">
              <h3>请求状态分布</h3>
            </div>
            <div class="temp_content">
              柱状图示4
            </div>
          </div>
          <div class="mytemp w244 fl">
            <div class="temp_top noselect">
              <h3>风险状态分布图</h3>
            </div>
            <div class="temp_content">
              柱状图示5
            </div>
          </div>
          <div class="mytemp w244 fr">
            <div class="temp_top noselect">
              <h3>请求数量/时间分布图</h3>
            </div>
            <div class="temp_content">
              横纵分布图示6
            </div>
          </div>
        </div>

        <div class="mytemp">
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
import { tooltip } from 'vue-strap'
import vueScrollbar from 'vue-scrollbar'

export default {
  name: 'TaskList',
  components: {
    tooltip,
    vueScrollbar
  },
  data () {
    return {
      searchText: '',
      tasks: [
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-01',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-02',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-03',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-04',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-05',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-06',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-07',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-08',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-09',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-10',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-11',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-12',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-13',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-14',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-15',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        },
        {
          url: 'https://www.baidu.com',
          percent: '99%',
          date: '2016-05-16',
          department: '测试部',
          user: '李铁柱',
          high: '6',
          middle: '7',
          low: '8',
          hint: '9'
        }
      ]
    }
  }
}
</script>
