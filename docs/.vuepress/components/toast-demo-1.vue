<template>
  <div>
    <h5>基础用法</h5>
    <p>默认居中显示，3 秒后自动消失。</p>
    <g-button @click="showTaost1">顶部</g-button>
    <g-button @click="showTaost2">居中</g-button>
    <g-button @click="showTaost3">底部</g-button>
    <h5>手动关闭</h5>
    <g-button @click="showTaost4">顶部</g-button>
    <h5>使用HTML片段</h5>
    <g-button @click="showTaost5">顶部</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button/button";
import Toast from "../../../src/toast/toast";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);

export default {
  components: {
    GButton: Button,
    GToast: Toast
  },
  methods: {
    showTaost1() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          position: "top",
          zIndex: 9999
        }
      );
    },
    showTaost2() {
      this.$toast(
        `i am a toast!i am a toast!  ${parseInt(Math.random() * 100)}`
      );
    },
    showTaost3() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          position: "bottom"
        }
      );
    },
    showTaost4() {
      this.$toast("i am a toast!", {
        autoClose: false,
        zIndex: 9999,
        position: "top",
        closeButton: {
          text: "关闭",
          callback() {
            alert("我点击了关闭~");
          }
        }
      });
    },
    showTaost5() {
      this.$toast(
        'i am a toast!i am a toast! <a href="https://www.baidu.com"> baidu.com</a>',
        {
          position: "top",
          enableHtml: true,
          zIndex: 9999
        }
      );
    }
  }
};
</script>
<style lang="scss">
.g-toast-wrapper {
  // z-index: 9999999 !important;
}
</style>

