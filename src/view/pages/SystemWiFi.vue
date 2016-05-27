<template>
  <section class="bd1200">
    <div class="mb30">
      <div class="temp_top noselect">
        <h3>用户列表</h3>
      </div>
      <table-component :table_data="table_data"></table-component>
    </div>

    <div class="temp_top noselect">
      <h3>WiFi 配置</h3>
    </div>
    <div class="temp_con pd2">
      <dl class="wifi-info">
        <dd>WiFi 名称：<span>唐朝安全巡航云之策 <a href="javascript:;"><i class="ui-icon ui-icon--edit"></i></a></span>
          <span class="hide">
            <input type="text" class="form-control" value="唐朝安全巡航云之策">
            <button class="blue btn_qiehuan">保存</button>
          </span>
        </dd>
        <dd>WiFi 地址：<span>192.168.1.111</span></dd>
        <dd>WiFi 密码：<span><i class="ic_pwd"></i> <a href="javascript:;"><i class="ui-icon ui-icon--edit"></i></a></span>
          <span class="hide">
            <input type="password" class="form-control">
            <button class="blue btn_qiehuan">保存</button>
          </span>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script lang="babel">
import * as api from 'src/api.js'
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'SystemWiFi',
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
        cols: [
          'id',
          'devicesName',
          'ip'
        ],
        linkField: {},
        theadData: {
          '设备 ID': '96',
          '设备名称': '',
          '设备 IP': ''
        },
        tbodyData: []
      }
    }
  },
  ready () {
    this.fetchWiFiList()
  },
  methods: {
    fetchWiFiList () {
      this.$http({
        url: api.wifiList,
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
