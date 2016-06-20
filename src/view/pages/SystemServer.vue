<template>
  <section class="bd1200">
    <div class="mytemp">
      <div class="temp_con system-server">
        <dl>
          <dd>
            <div class="ft14">CPU使用</div>
            <div class="myprogress">
              <div class="myprogress-bar" style="width: 12%">
                <div class="animatebar"></div>
              </div>
            </div>
            <span class="progress-percent">12%</span>
          </dd>
          <dd>
            <div class="ft14">内存使用</div>
            <div class="myprogress">
              <div class="myprogress-bar" style="width: 16%">
                <div class="animatebar myprogress-bar-safe"></div>
              </div>
            </div>
            <span class="progress-percent">16%（共 1234M）</span>
          </dd>
          <dd>
            <div class="ft14">系统储存</div>
            <div class="myprogress">
              <div class="myprogress-bar" style="width: 60%">
                <div class="animatebar color5"></div>
              </div>
            </div>
            <span class="progress-percent">60%（共 1234M）</span>
          </dd>
          <dd>
            <div class="ft14">数据储存使用</div>
            <div class="myprogress">
              <div class="myprogress-bar" style="width: 36%">
                <div class="animatebar color6"></div>
              </div>
            </div>
            <span class="progress-percent">36%（共 1234M）</span>
          </dd>
        </dl>
        <div class="btn-wrapper">
          <button class="blue">重新启动</button>
          <button class="green">关机</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="babel">
export default {
  name: 'SystemServer'
}
</script>
