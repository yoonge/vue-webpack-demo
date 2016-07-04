<template>
  <section class="main-wrapper">
    <form class="form-horizontal">
      <div class="form-group form-group-sm">
        <label class="col-xs-1 control-label">原密码</label>
        <div class="col-xs-11">
          <input type="password" class="form-control">
        </div>
      </div>
      <div class="form-group form-group-sm">
        <label class="col-xs-1 control-label">新密码</label>
        <div class="col-xs-11">
          <input type="password" class="form-control">
        </div>
      </div>
      <div class="form-group form-group-sm">
        <label class="col-xs-1 control-label">确认密码</label>
        <div class="col-xs-11">
          <input type="password" class="form-control">
        </div>
      </div>
      <div class="form-group form-group-sm">
        <div class="col-xs-11 col-xs-offset-1">
          <button class="blue">确定</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemPassword'
}
</script>
