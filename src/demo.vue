<template>
  <div id="demo">
    <g-nav :selected.sync="selected">
      <g-nav-item name="music">
        <div>nav 1</div>
      </g-nav-item>
      <g-sub-nav>
        <template slot="title">nav 2</template>
        <g-nav-item name="faction">小说</g-nav-item>
        <g-nav-item name="comic">动漫</g-nav-item>
        <g-sub-nav>
          <template slot="title">杂志期刊</template>
          <g-nav-item name="technology">科技</g-nav-item>
          <g-nav-item name="fashion">时尚</g-nav-item>
          <g-sub-nav>
            <template slot="title">社会</template>
            <g-nav-item name="11">社会 1</g-nav-item>
            <g-nav-item name="22">社会 2</g-nav-item>
            <g-nav-item name="33">社会 3</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
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
