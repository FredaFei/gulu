<template>
  <div id="demo">
    <g-pager :current-page="currentPage" :total-page="1" :current-page.sync="currentPage"></g-pager>
  </div>
</template>

<script>
import Vue from 'vue'
import Pager from './pager/pager'
Vue.component('g-pager', Pager)

export default {
  data() {
    return {
      currentPage: 1
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
