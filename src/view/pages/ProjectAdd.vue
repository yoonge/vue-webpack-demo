<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con pd1 clear">
        <dl class="ddmb15">
          <dd>
            <span class="tmp-colname">任务类型</span>
            <select class="lfselect jr_select" v-model="task_type">
              <option value="0" selected>域名任务</option>
              <option value="1">多域名任务</option>
              <option value="2">网站任务</option>
              <option value="3">多网站任务</option>
              <option value="4">目录模块任务</option>
              <option value="5">多目录模块任务</option>
            </select>
            <span class="tmp-notice">会对该域名及该域名的子域名相关业务流量进行分析和风险检测</span>
          </dd>
          <dd>
            <span class="tmp-colname">目标地址</span><input type="text" class="inputControl w270"><span class="tmp-notice">与任务类型相匹配的目标地址</span>
          </dd>
          <dd>
            <span class="tmp-colname">检测模式</span>
            <select class="lfselect jr_select onmodel" v-model="scan_mode">
              <option value="0" selected>默认模式</option>
              <option value="1">专家模式</option>
            </select>
          </dd>
        </dl>

        <div class="linewrap2" v-if="scan_mode=='1'">
          <dl class="ddmb15">
            <dd>
              <span class="tmp-colname">开启 COOKIE</span>
              <span class="myrediowrap">
                <label><input type="radio" name="cookie" value="0" checked>是</label>
                <label><input type="radio" name="cookie" value="1">否</label>
                <!--<span class="myredio" rel="1"><i class="ic_kuang"></i>是</span>-->
                <!--<span class="myredio" rel="0"><i class="ic_kuang"></i>否</span>-->
              </span>
            </dd>
            <dd>
              <span class="tmp-colname">扫描启动时间</span>
              <select class="lfselect zy_select" v-model="start_time">
                <option value="0" selected>立即启动</option>
                <option value="1">定时启动</option>
              </select>
              <input type="text" class="inputControl w160 inputstyle my_dsqd" placeholder="2015-01-02  12:22:11" v-if="start_time=='1'">
              <span class="tmp-notice">您可以先启动任务来记录流量，基于流量的风险检测会在设置的时间开始进行检测</span>
            </dd>
            <dd>
              <span class="tmp-colname">选择插件</span>
              <span class="mycheckwrap">
                <label><input type="checkbox">全选</label>
                <label><input type="checkbox" v-model="checkedBoxes">SQL 注入检测</label>
                <label><input type="checkbox" v-model="checkedBoxes">XSS 漏洞检测</label>
                <label><input type="checkbox" v-model="checkedBoxes">命令执行漏洞</label>
                <label><input type="checkbox" v-model="checkedBoxes">其他第三方漏洞</label>
                <!--<span class="myredio1"><i class="ic_kuang"></i>全选</span>-->
                <!--<span class="myredio"><i class="ic_kuang"></i>SQL注入检测</span>-->
                <!--<span class="myredio"><i class="ic_kuang"></i>XSS漏洞检测</span>-->
                <!--<span class="myredio"><i class="ic_kuang"></i>命令执行漏洞</span>-->
                <!--<span class="myredio"><i class="ic_kuang"></i>其他第三方漏洞</span>-->
              </span>
            </dd>
            <dd class="zdy_wrap fl ld">
              <span class="tmp-colname fl">自定义请求头</span>
              <dl class="fl wrapper_xz">
                <dd class="zdy_linehead">
                  <input type="text" class="inputControl inputstyle" placeholder="字段名"><span class="zdy_mh">:</span><input type="text" class="inputControl inputstyle w160" placeholder="内容">
                </dd>
              </dl>
              <button class="xz_btn color2 addyx">+ 新增一项</button>
            </dd>
          </dl>
        </div>

        <div class="btn-div">
          <button class="blue ml127">提交</button>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="babel">
export default {
  name: 'ProjectAdd',
  data () {
    return {
      task_type: '',
      scan_mode: '',
      start_time: '',
      checkedBoxes: []
    }
  }
}
</script>
