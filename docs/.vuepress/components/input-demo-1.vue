<template>
  <div>
    <h3>代码演示</h3>
    <div class="row">
      <g-input value="张三"></g-input>
      <g-input value="只读" readonly></g-input>
      <g-input value="disabled" disabled></g-input>
    </div>
    <div class="row">
      <g-input value="12345" icon-type="error" message="密码长度需超过6位"></g-input>
    </div>
    <div class="row">
      <g-input value="12345" icon-type="info" message="密码安全等级一般"></g-input>
    </div>
    <h3>使用方式</h3>
  </div>
</template>
<script>
import Input from '../../../src/input/input'
export default {
  components: {
    'GInput': Input
  }
}
</script>
<style>
.row{
  margin-bottom: 14px;
}
</style>

