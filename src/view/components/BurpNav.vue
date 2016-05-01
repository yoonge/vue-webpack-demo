<template>
  <div class="b-nav">
    <ul id="navList">
      <li
        v-for="item in items"
        :index="$index">
        <a href="javascript:;"
           :class="{'cur': isCurrent}">
          <div class="imgwrap">
            <i class="icons icon-{{item.icon}}"></i>
          </div>
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="babel">
export default {
  name: 'BurpNav',
  props: {
    items: {}
  },
  data () {
    return {
      isCurrent: true
    }
  }
}
</script>

<style>
  .b-nav li { display: inline-block; width: auto; margin: 0 12px; }
  .b-nav li:first-child { margin-left: 0;}
  .b-nav li a { display: inline-block; padding: 12px 0; width: 48px; background-color: transparent; -webkit-transition: width .3s,background-color .3s; transition: width .3s,background-color .3s;-webkit-user-select: none; -moz-user-select: none;  -ms-user-select: none; user-select: none;}
  .b-nav li a .imgwrap { width: 100%; text-align: center; }
  .b-nav li a span { display: block; text-align: center; height: 25px; width: 100%;}
  .b-nav li a.cur { background: rgba(0,0,0,0.08);  width: 72px;}
  .site-header-bd .b-nav { clear: both; zoom: 1; }

  .icons { display: inline-block; width: 30px; height: 30px; background-repeat: no-repeat; margin: 0 auto; }
  .icon-grid { background-image: url(../../assets/img/icon-grid.png); }
  .icon-stack { background-image: url(../../assets/img/icon-stack.png); }
  .icon-map { background-image: url(../../assets/img/icon-map.png); }
  .icon-tools { background-image: url(../../assets/img/icon-tools.png); }
  .icon-settings { background-image: url(../../assets/img/icon-settings.png); }
  .icon-folder { background-image: url(../../assets/img/icon-folder.png); }
  .icon-file { background-image: url(../../assets/img/icon-file.png); }
  .icon-info { background-image: url(../../assets/img/icon-info.png); }
</style>
