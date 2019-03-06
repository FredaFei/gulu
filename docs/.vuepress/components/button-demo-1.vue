<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-button>默认</am-button>
    <am-button icon="settings">icon 默认左边</am-button>
    <am-button icon="right" icon-position="right">icon 右边</am-button>
    <am-button loading>加载中</am-button>
    <am-button disabled>默认样式</am-button>
    <p><strong>按钮组</strong></p>
    <am-button-group>
      <am-button icon="left">prev</am-button>
      <am-button loading>加载中</am-button>
      <am-button icon="right" icon-position="right">next</am-button>
    </am-button-group>

  </div>
</template>
<script>
import Button from "../../../src/button/button";
import ButtonAmroup from "../../../src/button/buttonAmroup";
export default {
  components: {
    AmButton: Button,
    AmButtonAmroup: ButtonAmroup
  }
};
</script>
