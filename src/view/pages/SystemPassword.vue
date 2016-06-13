<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con pd1 clear">
        <dl class="ddmb15 form-horizontal">
          <dd><span class="tmp-colname">原密码</span><input type="password" class="form-control" placeholder="" value=""><span class="tmp-notice"></span></dd>
          <dd><span class="tmp-colname">新密码</span><input type="password" class="form-control" placeholder="" value=""><span class="tmp-notice"></span></dd>
          <dd><span class="tmp-colname">确认密码</span><input type="password" class="form-control" placeholder="" value=""><span class="tmp-notice"></span></dd>
        </dl>
        <div class="btn-div">
          <button class="blue ml127">确定</button>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemPassword'
}
</script>
