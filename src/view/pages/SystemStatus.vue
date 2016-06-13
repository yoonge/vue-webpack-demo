<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_top noselect">
        <h3>系统配额</h3>
      </div>
      <div class="temp_con pd2">
        <dl>
          <dd>最大用户数：50人</dd>
          <dd>当前用户数：10人</dd>
          <dd>最大在线人数：10人</dd>
          <dd>当前在线人数：1人</dd>
          <dd>服务到期：2016-01-01</dd>
        </dl>
      </div>

      <div class="temp_top noselect">
        <h3>在线用户列表</h3>
      </div>
      <div class="temp_content">
        分页表格...
      </div>
    </div>
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemStatus'
}
</script>
