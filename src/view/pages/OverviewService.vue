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
        <div class="ui-table ui-table--hasData">
          <table-component :table_data="table_data" :keys="keys"></table-component>
        </div>
      </div>
      <div class="mytemp w586 fr">
        <div class="temp_top noselect">
          <h3>风险动态</h3>
        </div>
        <div class="ui-table ui-table--hasData">
          <table-component :table_data="table_data1" :keys="keys1"></table-component>
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
          'time'
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
        keys1: [
          'id',
          'target',
          'count'
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
            target: '9',
            count: '10',
            time: '11',
            status: '12'
          },
          {
            id: '123',
            target: '13',
            count: '14',
            time: '15',
            status: '16'
          },
          {
            id: '123456',
            target: '9',
            count: '10',
            time: '11',
            status: '12'
          },
          {
            id: '123',
            target: '13',
            count: '14',
            time: '15',
            status: '16'
          },
          {
            id: '123456',
            target: '9',
            count: '10',
            time: '11',
            status: '12'
          }
        ]
      }
    }
  }
}
</script>
