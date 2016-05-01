<template>
  <div class="snav-main">
    <div class="snav-bd bd1200">
      <nav class="snav noselect">
        <sub-nav
          v-for="item in items"
          :item="item"
          :index="$index">
        </sub-nav>
      </nav>
      <search></search>
    </div>
  </div>
</template>

<script lang="babel">
import SubNav from './SubNav.vue'
import Search from './Search.vue'

export default {
  name: 'SubContainer',
  components: {
    SubNav,
    Search
  },
  props: {
    items: {}
  }
}
</script>

<style>
  .snav-main{ height: 42px; background: rgba(0,0,0,0.05); clear: both; zoom:1; margin-bottom: 50px; min-width: 1200px;}
  .snav-main li{ height: 41px; line-height: 40px; padding: 0; float: left;}
  .snav-main li:not(:last-child):after { content: "|"; margin: 0 12px; opacity: .2;}
  .snav-main li a{ color: #fff; -webkit-transition: color 0.2s; -o-transition: color 0.2s; transition: color 0.2s;}
  .snav-main li a.cur,.snav-main li a:hover{ color: #09ddce;}
  .snav{ margin-left: 3px;}
  .snav ul{ display: none; width: 100%; float: left; width: 100%; margin-right: -100%; -webkit-transition: opacity .3s,-webkit-transform .3s; transition: opacity .3s,-webkit-transform .3s; transition: opacity .3s,transform .3s; transition: opacity .3s,transform .3s,-webkit-transform .3s;}
  .snav ul.cur{ display: block;}
  .navbar-form {  margin: 5px 0 0 0;  padding: 0; border: none; -webkit-box-shadow: none;  box-shadow: none;}
  .form-control { display: block; width: 100%; height: 30px;  padding: 5px 12px; font-size: 13px; line-height: 1.428571429; color: #555; background-color: #fff; background-image: none; border: 1px solid #ccc; border-radius: 3px; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075); box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);  -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s; -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s; transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;}
  .search-query{ border-radius: 3px; line-height: 18px; color: #f8f8f8; border: none; background: url(../../assets/img/search-white.png) 5px 5px no-repeat rgba(0,0,0,0.2); padding-left: 26px; -webkit-transition: width 0.2s; -o-transition: width 0.2s; transition: width 0.2s; width: 180px; vertical-align: middle; -webkit-appearance: none; box-sizing: border-box; }
  .search-query:focus { width: 220px; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075); box-shadow: inset 0 1px 1px rgba(0,0,0,0.075); }
</style>
