<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <p>默认居中显示，3 秒后自动消失。</p>
    <am-button @click="showTaost1">顶部</am-button>
    <am-button @click="showTaost2">居中</am-button>
    <am-button @click="showTaost3">底部</am-button>
    <h5>手动关闭</h5>
    <am-button @click="showTaost4">顶部</am-button>
    <h5>使用HTML片段</h5>
    <am-button @click="showTaost5">顶部</am-button>
  </div>
</template>
<script>
import { AmButton, AmToast } from "../../../src/index";
import Vue from "vue";
Vue.use(AmToast);

export default {
  components: { AmButton },
  methods: {
    showTaost1() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          position: "top",
          zIndex: '9999'
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
.am-toast-wrapper {
}
</style>

