<template>
  <div>
    <p><strong>基础用法</strong></p>
    <g-button>默认</g-button>
    <g-button icon="settings">icon 默认左边</g-button>
    <g-button icon="right" icon-position="right">icon 右边</g-button>
    <g-button loading>加载中</g-button>
    <g-button disabled>默认样式</g-button>
    <p><strong>按钮组</strong></p>
    <g-button-group>
      <g-button icon="left">prev</g-button>
      <g-button loading>加载中</g-button>
      <g-button icon="right" icon-position="right">next</g-button>
    </g-button-group>

  </div>
</template>
<script>
import Button from "../../../src/button/button";
import ButtonGroup from "../../../src/button/buttonGroup";
export default {
  components: {
    GButton: Button,
    GButtonGroup: ButtonGroup
  }
};
</script>
