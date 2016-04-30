<template>
  <div class="b-nav">
    <ul id="navList">
      <li
        v-for="item in items"
        :item="item"
        :index="$index">
        <a href="javascript:;"><span>{{item.text}}</span></a>
      </li>
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic01.png" alt=""></div>&ndash;&gt;<span>服务概况</span></a></li>-->
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic02.png" alt=""></div>&ndash;&gt;<span>项目配置</span></a></li>-->
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic03.png" alt=""></div>&ndash;&gt;<span>任务管理</span></a></li>-->
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic04.png" alt=""></div>&ndash;&gt;<span>调试工具</span></a></li>-->
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic05.png" alt=""></div>&ndash;&gt;<span>系统管理</span></a></li>-->
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic06.png" alt=""></div>&ndash;&gt;<span>项目管理</span></a></li>-->
      <!--<li><a href="javascript:;">&lt;!&ndash;<div class="imgwrap"><img src="img/ic07.png" alt=""></div>&ndash;&gt;<span>技术文档</span></a></li>-->
      <!--<li><a href="javascript:;" class="cur">&lt;!&ndash;<div class="imgwrap"><img src="img/ic08.png" alt=""></div>&ndash;&gt;<span>关于系统</span></a></li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BurpNav',
  props: {
    items: {
      item: Object
    }
  }
}
</script>
