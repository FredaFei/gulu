<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-controll-count :count.sync="count"></am-controll-count>
  </div>
</template>
<script>
import { AmControllCount } from "../../../src/index";

export default {
  components: {
    AmControllCount,
  },
  data() {
    return {
      count: 2,
    }
  }
};
</script>
<style lang="scss" scoped>
.am-controll-count {
  width: 140px;
}
</style>
