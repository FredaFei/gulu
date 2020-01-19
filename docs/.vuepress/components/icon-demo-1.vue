<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-icon name="left"></am-icon>
    <am-icon name="right"></am-icon>
    <am-icon name="settings"></am-icon>
    <am-icon name="date"></am-icon>
    <am-icon name="loading"></am-icon>
    <am-icon name="error"></am-icon>
    <am-icon name="warning"></am-icon>
    <am-icon name="success"></am-icon>
    <am-icon name="info"></am-icon>
    <am-icon name="desc"></am-icon>
    <am-icon name="asc"></am-icon>
    <am-icon name="ellipsis"></am-icon>
    <am-icon name="upload"></am-icon>
    <am-icon name="double-left"></am-icon>
    <am-icon name="double-right"></am-icon>
    <am-icon name="thumbs-up"></am-icon>
  </div>
</template>
<script>
import { AmIcon } from "../../../src/index";

export default {
  components: {
    AmIcon
  }
};
</script>
<style scoped>
.am-icon {
  font-size: 30px;
  margin-bottom: 10px;
}

.am-icon + .am-icon {
  margin-left: 10px;
}
</style>
