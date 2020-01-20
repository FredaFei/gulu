<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-slides :selected.sync="selected1">
      <am-slides-item name="1">
        <div class="slides-item">slide 1</div>
      </am-slides-item>
      <am-slides-item name="2">
        <div class="slides-item">slide 2</div>
      </am-slides-item>
      <am-slides-item name="3">
        <div class="slides-item">slide 3</div>
      </am-slides-item>
    </am-slides>
    <p><strong>手动播放</strong></p>
    <am-slides :selected.sync="selected2" :auto-play="false">
      <am-slides-item name="11">
        <div class="slides-item">slide 1</div>
      </am-slides-item>
      <am-slides-item name="12">
        <div class="slides-item">slide 2</div>
      </am-slides-item>
      <am-slides-item name="13">
        <div class="slides-item">slide 3</div>
      </am-slides-item>
    </am-slides>
    <p><strong>下标风格</strong></p>
    <am-slides :selected.sync="selected3" dots-style="button">
      <am-slides-item name="111">
        <div class="slides-item">slide 1</div>
      </am-slides-item>
      <am-slides-item name="122">
        <div class="slides-item">slide 2</div>
      </am-slides-item>
      <am-slides-item name="133">
        <div class="slides-item">slide 3</div>
      </am-slides-item>
    </am-slides>
  </div>
</template>

<script>
import { AmSlides, AmSlidesItem } from "../../../src/index";
export default {
  components: { AmSlides, AmSlidesItem },
  data() {
    return {
      selected1: "",
      selected2: "",
      selected3: "",
    };
  }
};
</script>

<style scoped>
.slides-item {
  width: 100%;
  height: 150px;
  background: #99a9bf;
}
</style>
