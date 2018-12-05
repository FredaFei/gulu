<template>
  <div id="demo">
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

  </div>
</template>

<script>
import Vue from 'vue'
import Slides from './slides/slides'
import SlidesItem from './slides/slidesItem'
Vue.component('g-slides', Slides)
Vue.component('g-slides-item', SlidesItem)

export default {
  data() {
    return {
      selected: ''
    }
  }
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
}
#demo{
  padding: 20px;
}
.slides-item {
  width: 100%;
  height: 150px;
  background: #dddddd;
}

</style>
