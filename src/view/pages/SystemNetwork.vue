<template>
  <section class="main-wrapper">
    <form class="form-horizontal">
      <div class="form-group from-group-sm">
        <label class="col-xs-1 control-label">网口 1</label>
        <div class="col-xs-11">
          <input type="text" class="form-control" value="172.10.1.11" disabled>
          <span class="tmp-notice">配置网络地址，如 172.10.1.11</span>
        </div>
      </div>
      <div class="form-group from-group-sm">
        <label class="col-xs-1 control-label">子网掩码地址</label>
        <div class="col-xs-11">
          <input type="text" class="form-control" value="255.255.255.0" disabled>
          <span class="tmp-notice">配置子网掩码，如 255.255.0.0</span>
        </div>
      </div>
      <div class="form-group from-group-sm">
        <label class="col-xs-1 control-label">网关地址</label>
        <div class="col-xs-11">
          <input type="text" class="form-control" value="172.10.1.1" disabled>
          <span class="tmp-notice">配置网关地址，如 172.10.1.1</span>
        </div>
      </div>
      <div class="form-group from-group-sm">
        <label class="col-xs-1 control-label">DNS 地址</label>
        <div class="col-xs-11">
          <input type="text" class="form-control" value="114.114.114.114" disabled>
          <span class="tmp-notice">配置 DNS 地址，如 114.114.114.114</span>
        </div>
      </div>
      <div class="form-group from-group-sm">
        <label class="col-xs-1 control-label">DNS 备选</label>
        <div class="col-xs-11">
          <input type="text" class="form-control" value="114.114.115.115" disabled>
          <span class="tmp-notice">配置备选 DNS 地址，如 114.114.115.115</span>
        </div>
      </div>
      <div class="form-group from-group-sm">
        <div class="col-xs-11 col-xs-offset-1">
          <button class="green init_bj">编辑</button>
          <button class="blue init_qx">取消</button>
          <button class="green init_qx">保存</button>
          <button class="blue">网络设置</button>
          <a href="javascript:;">连接成功</a>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemNetwork'
}
</script>
