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
          <table-component></table-component>
        </div>
      </div>
      <div class="mytemp w586 fr">
        <div class="temp_top noselect">
          <h3>风险动态</h3>
        </div>
        <div class="ui-table ui-table--hasData">
          <table-component></table-component>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'Overview',
  components: {
    TableComponent
  }
}
</script>
