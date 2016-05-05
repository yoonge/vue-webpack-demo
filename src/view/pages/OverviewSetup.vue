<template>
  <div>
    <h1>Setup</h1>

    <section class="bd1200">
      <div class="mytemp w586 fl">
        <div class="temp_top noselect">
          <h3>近期任务</h3>
          <div class="rightWrap">
            <a class="mybtn" href="javascript:;">任务管理</a>
          </div>
        </div>
        <div class="ui-table ui-table--hasData">
        </div>
      </div>
      <div class="mytemp w586 fr">
        <div class="temp_top noselect">
          <h3>风险动态</h3>
        </div>
        <div class="ui-table ui-table--hasData">
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'OverviewSetup',
  components: {
    TableComponent
  }
}
</script>
