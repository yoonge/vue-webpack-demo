<template>
  <div id="app">
    <burp-header></burp-header>
  </div>
</template>

<script lang="babel">
import BurpHeader from './view/components/BurpHeader.vue'

export default {
  components: {
    BurpHeader
  }
}
</script>

<style>
  html { font-family: -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "PingFang TC", "Hiragino Sans GB", "Microsoft YaHei", "Microsoft JhengHei", sans-serif; font-size: 12px; line-height: 1.5; word-wrap: break-word; }
  body { color: #fff; background-attachment: fixed; background-color: #154165; background-image: linear-gradient(to right bottom, #154165 0%, #154165 30%, #597da5 70%, #7393bf 100%); }
  *, *::before, *::after { box-sizing: border-box; }

  body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td, figure, div { margin: 0; padding: 0; }
  fieldset, img { border: 0 none; }
  a, img { vertical-align: top; }
  a { background: transparent; -webkit-tap-highlight-color: rgba(255,255,255,0); outline: none; color: #fff; }
  a:active, a:hover { outline: 0 none; }
  a, a:hover { text-decoration: none; }
  :focus { outline: 0 none; }
  article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary { display: block; }
  address, caption, cite, code, dfn, em, th, var, optgroup { font-style: normal; font-weight: 400; }
  h1, h2, h3, h4, h5, h6 { font-size: 100%; }
  abbr, acronym { border: 0 none; font-variant: normal; }
  input, button, textarea, select, optgroup, option { font-family: inherit; font-size: 100%; font-style: inherit; font-weight: inherit; outline: none; }
  textarea { resize: none; overflow: auto; }
  code, kbd, samp, tt, input, button, textarea, select { font-size: 100%; }
  ol, ul, li { list-style: none; }
  table { border-collapse: collapse; border-spacing: 0; }
  sup, sub { font-size: 100%; vertical-align: baseline; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after, q:before, q:after { content: ''; }
  button, html input[type=button], input[type=reset], input[type=submit] { -webkit-appearance: button; cursor: pointer; }
  button[disabled], html input[disabled] { cursor: not-allowed; }
  button { overflow: visible; }
  em, i { font-style: normal; }
  input { font:12px/150% "微软雅黑"; }
  input:disabled { color: rgba(255,255,255,0.3); background: rgba(0,0,0,0.08); }
  form { display: inline-block; }
  *, :after, :before { box-sizing: border-box; }

  .fz36{ font-size: 36px; vertical-align: middle; text-align: right; width: 148px; display: inline-block;}
  .ft14{ font-size: 14px;}
  .fl{float:left!important;}
  .fr{float:right!important;}
  .hidden{ display: none!important;}
  .clear{ zoom:1;}
  .clear:after{ content:''; display:block; clear:both;}
  .lh { overflow: hidden; zoom: 1;}
  .ld { position: relative; zoom: 1;}
  .clearfix:after{content:"";display:block;clear:both;}
  .clearfix{zoom:1;}
  .bd1200{ width: 1200px; margin: 0 auto; clear: both; zoom:1;}
  .wp100{ width: 100%;}
  .w85{ width: 85px;}
  .w160{ width: 160px!important;}
  .w244{ width: 244px;}
  .w580{ width: 580px;}
  .w586{ width: 586px;}
  .w270{ width: 275px;}
  .w252{ width: 252px;}
  .w380{ width: 380px;}
  .w400{ width: 400px;}
  .w775{ width: 775px;}
  .ht420{ height: 420px; overflow: hidden;}
  .mb15{ margin-bottom: 15px;}
  .ml127{ margin-left:127px;}
  .ml187{ margin-left:187px;}
  .mb30{ margin-bottom: 30px;}
  .mt50{ margin-top: 50px;}
  .mr64{ margin-right: 64px;}
  .mr31{ margin-right: 31px;}
  .mr20{ margin-right: 20px;}
  .pd1{ padding: 30px 43px!important;}
  .pd2{ padding: 10px 43px!important;}
  .pd3{ padding: 35px 65px!important;}
  .pd4{ padding: 0 11px!important; line-height: 77px;}
  .pd5{ padding: 30px 75px 20px 75px!important;}
  .pd6{ padding: 40px 77px!important;}
  .pd7{ padding: 20px 50px 40px 50px!important;}
  .pd7 dd a{ color:#09ddce;}
  .pd4 span{ font-size: 38px; width: 158px; line-height: 48px; text-align: right; display: inline-block; vertical-align: middle;}
  .color1{ color: #27b8ff;}
  .color2{ color: #09ddce;}
  .color3{ color: #00d8c9;}
  .color4{ color: #0bbdff!important;}
  .color5{ background: #F3C34C;}
  .color6{ background: #F25117;}
  .ic_demo{ width: 60px; font-size: 48px; color: hsla(0,0%,100%,.5); display: inline-block; vertical-align: middle;}
  .ic_demo1{ background: url(./assets/img/ic_demo1.png) no-repeat;}
  .ic_demo2{ background: url(./assets/img/ic_demo2.png) no-repeat;}
  .ic_demo3{ background: url(./assets/img/ic_demo3.png) no-repeat;}
  .ic_demo4{ background: url(./assets/img/ic_demo4.png) no-repeat;}
  .ic_demo5{ background: url(./assets/img/ic_demo5.png) no-repeat;}
  .bold{ font-weight: bold;}

  .noselect { -webkit-transition: background-color 0.2s; -o-transition: background-color 0.2s; transition: background-color 0.2s; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}
</style>
