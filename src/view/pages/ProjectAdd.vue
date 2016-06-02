<template>
  <section class="main-wrapper">
    <form class="form-horizontal">
      <div class="option-basic clearfix">
        <div class="form-group">
          <label class="col-xs-1 control-label">任务类型</label>
          <div class="col-xs-11">
            <select class="form-control" v-model="taskType">
              <option value="0" selected>域名任务</option>
              <option value="1">多域名任务</option>
              <option value="2">网站任务</option>
              <option value="3">多网站任务</option>
              <option value="4">目录模块任务</option>
              <option value="5">多目录模块任务</option>
            </select>
            <span class="tmp-notice" v-if="taskType=='0' || taskType=='1'">会对该域名及该域名的子域名相关业务流量进行分析和风险检测</span>
            <span class="tmp-notice" v-if="taskType=='2' || taskType=='3'">会对该网站相关的流量进行分析和风险检测</span>
            <span class="tmp-notice" v-if="taskType=='4' || taskType=='5'">会对该网站的该目录及子目录进行风险检测</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-1 control-label">目标地址</label>
          <div class="col-xs-11">
            <input type="text" class="form-control" v-if="taskType=='0' || taskType=='2' || taskType=='4'" v-model="taskTarget">
            <textarea class="form-control" rows="5" v-if="taskType=='1' || taskType=='3' || taskType=='5'" placeholder="每行一条" v-model="taskTarget"></textarea>
            <span class="tmp-notice">与任务类型相匹配的目标地址</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-1 control-label">检测模式</label>
          <div class="col-xs-11">
            <select class="form-control" v-model="scanMode">
              <option value="0" selected>默认模式</option>
              <option value="1">专家模式</option>
            </select>
          </div>
        </div>
      </div>
      <!--<dl class="ddmb15">-->
        <!--<dd class="clearfix">-->
          <!--<span class="tmp-colname">任务类型</span>-->
          <!--<select class="form-control" v-model="taskType">-->
            <!--<option value="0" selected>域名任务</option>-->
            <!--<option value="1">多域名任务</option>-->
            <!--<option value="2">网站任务</option>-->
            <!--<option value="3">多网站任务</option>-->
            <!--<option value="4">目录模块任务</option>-->
            <!--<option value="5">多目录模块任务</option>-->
          <!--</select>-->
          <!--<span class="tmp-notice" v-if="taskType=='0' || taskType=='1'">会对该域名及该域名的子域名相关业务流量进行分析和风险检测</span>-->
          <!--<span class="tmp-notice" v-if="taskType=='2' || taskType=='3'">会对该网站相关的流量进行分析和风险检测</span>-->
          <!--<span class="tmp-notice" v-if="taskType=='4' || taskType=='5'">会对该网站的该目录及子目录进行风险检测</span>-->
        <!--</dd>-->
        <!--<dd class="clearfix">-->
          <!--<span class="tmp-colname">目标地址</span>-->
          <!--<input type="text" class="form-control" v-if="taskType=='0' || taskType=='2' || taskType=='4'" v-model="taskTarget">-->
          <!--<textarea class="form-control" rows="5" v-if="taskType=='1' || taskType=='3' || taskType=='5'" placeholder="每行一条" v-model="taskTarget"></textarea>-->
          <!--<span class="tmp-notice">与任务类型相匹配的目标地址</span>-->
        <!--</dd>-->
        <!--<dd class="clearfix">-->
          <!--<span class="tmp-colname">检测模式</span>-->
          <!--<select class="form-control" v-model="scanMode">-->
            <!--<option value="0" selected>默认模式</option>-->
            <!--<option value="1">专家模式</option>-->
          <!--</select>-->
        <!--</dd>-->
      <!--</dl>-->

      <div class="option-expert clearfix" v-if="scanMode=='1'">
        <div class="form-group">
          <label class="col-xs-1 control-label">开启 COOKIE</label>
          <div class="col-xs-11">
            <label><input type="radio" name="cookie" value="0" checked>是</label>
            <label><input type="radio" name="cookie" value="1">否</label>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-1 control-label">扫描启动时间</label>
          <div class="col-xs-11">
            <select class="form-control" v-model="startTime.status">
              <option value="0" selected>立即启动</option>
              <option value="1">定时启动</option>
            </select>
            <input type="text" class="form-control" placeholder="2016-03-14 05:45:37" v-if="startTime.status=='1'" v-model="startTime.time">
            <span class="tmp-notice">您可以先启动任务来记录流量，基于流量的风险检测会在设置的时间开始进行检测</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-1 control-label">选择插件</label>
          <div class="col-xs-11">
            <label><input type="checkbox" v-model="checkAll">全选</label>
            <label v-for="checkBox in checkBoxes"><input type="checkbox" v-model="checkBox.checked">{{checkBox.label}}</label>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-1 control-label">自定义请求头</label>
          <div class="col-xs-11">
            <dl class="fl">
              <dd class="zdy_linehead clearfix" v-for="header in headers">
                <input type="text" class="form-control" placeholder="字段名" v-model="header.name"><span class="zdy_mh">:</span><input type="text" class="form-control" placeholder="内容" v-model="header.content">
              </dd>
            </dl>
            <a href="javascript:;" class="mybtn" @click="addHeader"><i class="ui-icon ui-icon--plus"></i> 新增一项</a>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-11 col-xs-offset-1">
            <button class="blue">提交</button>
          </div>
        </div>
        <!--<dl class="ddmb15">-->
          <!--<dd class="clearfix">-->
            <!--<span class="tmp-colname">开启 COOKIE</span>-->
            <!--<span class="myrediowrap">-->
              <!--<label><input type="radio" name="cookie" value="0" checked>是</label>-->
              <!--<label><input type="radio" name="cookie" value="1">否</label>-->
            <!--</span>-->
          <!--</dd>-->
          <!--<dd class="clearfix">-->
            <!--<span class="tmp-colname">扫描启动时间</span>-->
            <!--<select class="form-control" v-model="startTime.status">-->
              <!--<option value="0" selected>立即启动</option>-->
              <!--<option value="1">定时启动</option>-->
            <!--</select>-->
            <!--<input type="text" class="form-control" placeholder="2016-03-14 05:45:37" v-if="startTime.status=='1'" v-model="startTime.time">-->
            <!--<span class="tmp-notice">您可以先启动任务来记录流量，基于流量的风险检测会在设置的时间开始进行检测</span>-->
          <!--</dd>-->
          <!--<dd class="clearfix">-->
            <!--<span class="tmp-colname">选择插件</span>-->
            <!--<span class="mycheckwrap">-->
              <!--<label><input type="checkbox" v-model="checkAll">全选</label>-->
              <!--<label v-for="checkBox in checkBoxes"><input type="checkbox" v-model="checkBox.checked">{{checkBox.label}}</label>-->
            <!--</span>-->
          <!--</dd>-->
          <!--<dd class="zdy_wrap fl ld clearfix">-->
            <!--<span class="tmp-colname fl">自定义请求头</span>-->
            <!--<dl class="fl">-->
              <!--<dd class="zdy_linehead clearfix" v-for="header in headers">-->
                <!--<input type="text" class="form-control" placeholder="字段名" v-model="header.name"><span class="zdy_mh">:</span><input type="text" class="form-control" placeholder="内容" v-model="header.content">-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<a href="javascript:;" class="mybtn" @click="addHeader"><i class="ui-icon ui-icon&#45;&#45;plus"></i> 新增一项</a>-->
          <!--</dd>-->
        <!--</dl>-->
      </div>
      <!--<div class="btn-div">-->
        <!--<button class="blue">提交</button>-->
      <!--</div>-->
    </form>
  </section>
</template>

<script lang="babel">
export default {
  name: 'ProjectAdd',
  data () {
    return {
      taskType: '0',
      taskTarget: '',
      scanMode: '0',
      startTime: {
        status: '0',
        time: ''
      },
      checkBoxes: [
        {
          label: 'SQL 注入检测',
          checked: true
        },
        {
          label: 'XSS 漏洞检测',
          checked: true
        },
        {
          label: '命令执行漏洞',
          checked: true
        },
        {
          label: '其他第三方漏洞',
          checked: true
        },
        {
          label: 'SQL 注入检测',
          checked: true
        },
        {
          label: 'XSS 漏洞检测',
          checked: true
        },
        {
          label: '命令执行漏洞',
          checked: true
        },
        {
          label: '其他第三方漏洞',
          checked: true
        },
        {
          label: 'SQL 注入检测',
          checked: true
        },
        {
          label: 'XSS 漏洞检测',
          checked: true
        },
        {
          label: '命令执行漏洞',
          checked: true
        },
        {
          label: '其他第三方漏洞',
          checked: true
        }
      ],
      headers: [
        {
          name: '',
          content: ''
        }
      ]
    }
  },
  computed: {
    checkAll: {
      get () {
        return this.checkedCount === this.checkBoxes.length
      },
      set (val) {
        this.checkBoxes.forEach(function (item) {
          item.checked = val
        })
        return val
      }
    },
    checkedCount: {
      get () {
        let i = 0
        this.checkBoxes.forEach(function (item) {
          if (item.checked === true) i++
        })
        return i
      }
    }
  },
  methods: {
    addHeader () {
      const header = {name: '', content: ''}
      this.headers.push(header)
    }
  }
}
</script>
