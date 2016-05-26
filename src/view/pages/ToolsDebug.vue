<template>
  <section class="bd1200">
    <div class="w580 fl">
      <div class="temp_top noselect">
        <h3>请求头</h3>
        <div class="rightWrap">
          <a class="mybtn" href="javascript:;">发送</a>
        </div>
      </div>
      <textarea class="slimScroll temp_con mytextarea" v-model="reqHeader">
POST /20151111/qiandianxunbao/ajax.php HTTP/1.1
Host: huodong.chuchujie.com
Proxy-Connection: keep-alive
Content-Length: 14
Accept: application/json
Origin: http://huodong.chuchujie.com
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Referer: http://huodong.chuchujie.com/20151111/qiandianxunbao/index2.html
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: CNZZDATA1256092095=1672623570-1447654160-http%253A%252F%252Fhuodong.chuchujie.com%252F%7C1447654160

action=gettime</textarea>
    </div>
    <div class="w580 fr">
      <div class="temp_top noselect">
        <h3>响应头</h3>
      </div>
      <textarea class="slimScroll temp_con mytextarea color1" readonly v-model="resHeader">
HTTP/1.1 200 OK
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 16 Nov 2015 06:35:01 GMT
Server: nginx/1.6.2
Vary: Accept-Encoding
X-Powered-By: PHP/5.5.20
Content-Length: 105
Connection: keep-alive</textarea>
    </div>
  </section>
</template>

<script lang="babel">
import $ from 'jquery'

export default {
  name: 'ToolsDebug',
  data () {
    return {
      reqHeader: '',
      resHeader: ''
    }
  },
  ready () {
    $('.slimScroll').slimScroll({ height: '360px' })
  }
}
</script>
