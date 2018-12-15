<template>
  <div id="demo">
    <g-pager :current-page="2" :total-page="20"></g-pager>
  </div>
</template>

<script>
import Vue from 'vue'
import pager from './pager/pager'
Vue.component('g-pager', Pager)

export default {
  data() {
    return {
      
    }
  },
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

#demo {
  padding: 20px;
}
</style>
