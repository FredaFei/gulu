<template>
  <div id="demo">
    <g-nav :selected.sync="selected">
      <g-nav-item name="music">
        <div>nav 1</div>
      </g-nav-item>
      <g-nav-item name="book">
        <g-sub-nav>
          <template slot="title">nav 2</template>
          <g-nav-item>小说</g-nav-item>
          <g-nav-item>动漫</g-nav-item>
          <g-nav-item>杂志期刊</g-nav-item>
        </g-sub-nav>
      </g-nav-item>
      <g-nav-item name="sport">
        <div>nav 3</div>
      </g-nav-item>
    </g-nav>

  </div>
</template>

<script>
import Vue from 'vue'
import Nav from './nav/nav'
import NavItem from './nav/navItem'
import SubNav from './nav/subNav'
Vue.component('g-nav', Nav)
Vue.component('g-nav-item', NavItem)
Vue.component('g-sub-nav', SubNav)

export default {
  data() {
    return {
      selected: ['book']
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

</style>
