<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con pd7">
        <div class="linewrap1 noselect">
          <div class="jieru_tag" :class="{'cur': current==0}" @click="switchTab">
            <div class="tag_in"></div>
            <div>WiFi 接入</div>
          </div>
          <div class="jieru_tag" :class="{'cur': current==1}" @click="switchTab">
            <div class="tag_in tag_in1"></div>
            <div>代理 接入</div>
          </div>
        </div>

        <div class="jr_tag" :class="{'cur': current==0}">
          <div class="linewrap1">
            <dl>
              <dt>1. 连接 WiFi</dt>
              <dd>
                1. 将您的测试设备，如您的电脑，手机，智能设备连接至以下配置的 WiFi 中
                <div class="temp_con1 color1">
                  WiFi 名称：测试 <br>
                  连接密码：ABC123456 <br>
                </div>
              </dd>
            </dl>
          </div>

          <div class="linewrap1">
            <dl>
              <dt>2. 测试连接</dt>
              <dd>
                1. 打开已连接 WiFi 的客户端，访问
                <a href="javascript:;" taget="_blank">http://192.168.1.199/iai299a92x91k</a>
              </dd>
              <dd>
                2. 我已访问。
                <a href="javascript:;">点击测试</a>
                <span class="btnstyle2">连接成功</span>
              </dd>
              <dd>3. 如果您是智能设备，无法发送指定请求，可以跳过这一步</dd>
            </dl>
          </div>

          <div class="linewrap1">
            <dl>
              <dt>3. 创建项目</dt>
              <dd>1. 点击<a href="tjxm.html">创建项目</a></dd>
            </dl>
          </div>

          <div class="linewrap1 noborder">
            <dl>
              <dt>4. 启动测试任务</dt>
              <dd>1. 点击<a href="rwlb.html">启动测试任务</a></dd>
            </dl>
          </div>
        </div>

        <div class="jr_tag" :class="{'cur': current==1}">
          <div class="linewrap1">
            <dl>
              <dt>1. 连接代理</dt>
              <dd>
                1. 将您的测试设备，如您的电脑，手机，智能设备配置以下代理访问互联网
                <div class="temp_con1 color1">
                  代理地址：192.168.11.11 <br>
                  用户名：ABC123456 <br>
                  连接密码：ABC123456
                </div>
              </dd>
            </dl>
          </div>

          <div class="linewrap1">
            <dl>
              <dt>2. 测试连接</dt>
              <dd>
                1. 打开已连接代理的客户端，访问
                <a href="javascript:;" taget="_blank">http://192.168.1.199/iai299a92x91k</a>
              </dd>
              <dd>
                2. 我已访问。
                <a href="javascript:;">点击测试</a>
                <button class="btnstyle1 color2">连接成功</button>
              </dd>
            </dl>
          </div>

          <div class="linewrap1">
            <dl>
              <dt>3. 创建项目</dt>
              <dd>1. 点击<a href="tjxm.html">创建项目</a></dd>
            </dl>
          </div>

          <div class="linewrap1 noborder">
            <dl>
              <dt>4. 启动测试任务</dt>
              <dd>1. 点击<a href="rwlb.html">启动测试任务</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'OverviewSetup',
  components: {
    TableComponent
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    switchTab: function () {
      if (this.current === 0) this.current = 1
      else this.current = 0
    }
  }
}
</script>
