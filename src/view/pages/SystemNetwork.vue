<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con pd1 clear">
        <dl class="ddmb15 form-horizontal">
          <dd><span class="tmp-colname">网口1</span><input type="text" class="form-control" placeholder="172.10.1.11" value="172.10.1.11" disabled='disabled'><span class="tmp-notice">配置网络地址，如172.10.1.11</span></dd>
          <dd><span class="tmp-colname">子网掩码地址</span><input type="text" class="form-control" placeholder="255.255.0.0" value="255.255.255.0" disabled='disabled'><span class="tmp-notice">配置子网掩码，如255.255.0.0</span></dd>
          <dd><span class="tmp-colname">网关地址</span><input type="text" class="form-control" placeholder="172.10.11.1" value="172.10.1.11" disabled='disabled'><span class="tmp-notice">配置网关地址，如172.10.11.1</span></dd>
          <dd><span class="tmp-colname">DNS地址</span><input type="text" class="form-control" placeholder="172.10.11.1" value="172.10.1.11" disabled='disabled'><span class="tmp-notice">配置DNS地址，如172.10.11.1</span></dd>
          <dd><span class="tmp-colname">DNS备选</span><input type="text" class="form-control" placeholder="172.10.11.1" value="172.10.1.11" disabled='disabled'><span class="tmp-notice">配置备选DNS地址，如172.10.11.1</span></dd>
        </dl>
        <div class="btn-div">
          <button class="green ml127 init_bj">编辑</button>
          <button class="blue ml127 init_qx hidden">取消</button>
          <button class="green init_qx hidden">保存</button>
          <button class="blue">网络设置</button>
          <a href="javascript:;" class="color2">连接成功</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemNetwork'
}
</script>
