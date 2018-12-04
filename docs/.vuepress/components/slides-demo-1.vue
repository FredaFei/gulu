<template>
  <div class="box">
    <h3>代码演示</h3>
    <g-slides :selected.sync="selected">
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
    <h3>使用方式</h3>
  </div>
</template>

<script>
import Slides from '../../../src/slides/slides'
import SlidesItem from '../../../src/slides/slidesItem'
export default {
  components: {
    GSlides: Slides,
    GSlidesItem: SlidesItem
  },
  data(){
    return {
      selected: ''
    }
  }
}
</script>

<style>
.box{
  padding: 20px;
}
.slides-item {
  width: 100%;
  height: 150px;
  background: #dddddd;
}
</style>
