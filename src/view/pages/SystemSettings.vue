<template>
  <section class="bd1200 system-settings">

    <div class="temp_top noselect">
      <h3>升级策略</h3>
    </div>
    <div class="temp_con pd1">
      <ul class="info-list">
        <li class="radio"><label><input type="radio" name="update" value="0" v-model="autoUpdate"> 关闭自动升级，选用手动升级</label></li>
        <li class="radio"><label><input type="radio" name="update" value="1" v-model="autoUpdate"> 开启自动升级（每 3 个小时获取一次系统更新）</label></li>
      </ul>
      <div class="btn-wrapper">
        <button class="blue">确定修改</button>
      </div>
    </div>

    <div class="temp_top noselect">
      <h3>产品升级</h3>
    </div>
    <div class="temp_con pd1">
      <ul class="info-list">
        <li>当前产品:<span>云智测 Y100</span></li>
        <li>当前版本:<span>1.0.2</span></li>
        <li>授权时间:<span>2017-01-02</span></li>
        <li>升级策略:<span>自动升级</span></li>
        <li>更新动态:<span>有更新已下载（201601020992）</span><button class="color2">执行升级</button></li>
      </ul>
      <div class="btn-wrapper">
        <button class="blue">上传升级包</button>
        <button class="green">执行升级</button>
      </div>
    </div>

    <div class="temp_top noselect">
      <h3>升级记录</h3>
    </div>
    <div class="temp_con pd1">
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
              <li>升级策略库，支持SQL注入检测</li>k
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
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemSettings',
  data () {
    return {
      autoUpdate: '1'
    }
  }
}
</script>
