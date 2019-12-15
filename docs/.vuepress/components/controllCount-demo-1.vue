<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-controll-count :count.sync="count"></am-controll-count>
  </div>
</template>
<script>
  import ControllCount from "../../../src/controllCount/index";

  export default {
    components: {
      AmControllCount: ControllCount,
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
