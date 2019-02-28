<template>
  <div>
    <h4>基础用法</h4>
    <g-slides :selected.sync="selected1">
      <g-slides-item name="1">
        <div class="slides-item">slide 1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="slides-item">slide 2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="slides-item">slide 3</div>
      </g-slides-item>
    </g-slides>
    <h4>手动播放</h4>
    <g-slides :selected.sync="selected2" :auto-play="false">
      <g-slides-item name="11">
        <div class="slides-item">slide 1</div>
      </g-slides-item>
      <g-slides-item name="12">
        <div class="slides-item">slide 2</div>
      </g-slides-item>
      <g-slides-item name="13">
        <div class="slides-item">slide 3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>

<script>
import GSlides from "../../../src/slides/slides";
import GSlidesItem from "../../../src/slides/slidesItem";
export default {
  components: {
    GSlides,
    GSlidesItem
  },
  data() {
    return {
      selected1: "",
      selected2: ""
    };
  }
};
</script>

<style>
.slides-item {
  width: 100%;
  height: 150px;
  background: #99a9bf;
}
</style>
