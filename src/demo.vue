<template>
  <div id="demo">
    <g-nav :selected.sync="selected">
      <g-nav-item name="music">
        <div>slide 1</div>
      </g-nav-item>
      <g-nav-item name="book">
        <div>slide 2</div>
      </g-nav-item>
      <g-nav-item name="sport">
        <div>slide 3</div>
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
Vue.component('g-subnav', SubNav)

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
