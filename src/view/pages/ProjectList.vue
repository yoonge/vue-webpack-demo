<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_top noselect">
        <h3>项目列表</h3>
        <div class="rightWrap">
          <a class="mybtn" href="javascript:;">批量删除</a>
          <a class="mybtn color4" href="javascript:;">立即启动</a>
        </div>
      </div>
      <table-component :table_data="table_data"></table-component>
    </div>
  </section>
</template>

<script lang="babel">
import TableComponent from 'components/TableComponent.vue'

export default {
  name: 'ProjectList',
  components: {
    TableComponent
  },
  data () {
    return {
      table_data: {
        limit: [5, 0],
        loading: false,
        selectAble: true,
        pagination: true,
        cols: [
          {
            field: 'id',
            width: '96',
            text: '项目 ID'
          },
          {
            field: 'target',
            width: '48%',
            text: '项目目标',
            linkPrefix: '#!'
          },
          {
            field: 'type',
            width: '',
            text: '项目类型'
          },
          {
            field: 'count',
            width: '',
            text: '已测试次数'
          }
        ],
        rows: [
          {
            id: '123456',
            target: 'sangebaimao.com',
            type: '域名任务',
            count: '2'
          },
          {
            id: '123',
            target: 'baidu.com',
            type: '域名任务',
            count: '6'
          },
          {
            id: '123456',
            target: 'qq.com tangscan.com sina.com weibo.com xunlei.com battle.net stackoverflow.com wooyun.org github.com coding.net',
            type: '多网站任务',
            count: '2'
          },
          {
            id: '123',
            target: 'qq.com tangscan.com sina.com weibo.com xunlei.com battle.net stackoverflow.com wooyun.org github.com coding.net',
            type: '多网站任务',
            count: '6'
          },
          {
            id: '123456',
            target: 'google.com',
            type: '域名任务',
            count: '2'
          },
          {
            id: '123456',
            target: 'sangebaimao.com',
            type: '域名任务',
            count: '2'
          },
          {
            id: '123',
            target: 'baidu.com',
            type: '域名任务',
            count: '6'
          },
          {
            id: '123456',
            target: 'qq.com tangscan.com sina.com weibo.com xunlei.com battle.net stackoverflow.com wooyun.org github.com coding.net',
            type: '多网站任务',
            count: '2'
          },
          {
            id: '123',
            target: 'qq.com tangscan.com sina.com weibo.com xunlei.com battle.net stackoverflow.com wooyun.org github.com coding.net',
            type: '多网站任务',
            count: '6'
          },
          {
            id: '123456',
            target: 'google.com',
            type: '域名任务',
            count: '2'
          }
        ]
      }
    }
  }
}
</script>
