<template>
  <div>
    <h3>代码演示</h3>
    <h4>垂直菜单，可内嵌子菜单</h4>
    <am-nav :selected.sync="selected" @update:selected="clickFn" vertical style="width:200px; margin-bottom:50px">
      <am-nav-item name="music">
        <div>nav 1</div>
      </am-nav-item>
      <am-sub-nav name="book">
        <template slot="title">nav 2</template>
        <am-nav-item name="faction">小说</am-nav-item>
        <am-nav-item name="comic">动漫</am-nav-item>
        <am-sub-nav name="classis">
          <template slot="title">杂志期刊</template>
          <am-nav-item name="technology">科技</am-nav-item>
          <am-nav-item name="fashion">时尚</am-nav-item>
          <am-sub-nav name="social">
            <template slot="title">社会</template>
            <am-nav-item name="11">社会 1</am-nav-item>
            <am-nav-item name="22">社会 2</am-nav-item>
            <am-nav-item name="33">社会 3</am-nav-item>
          </am-sub-nav>
        </am-sub-nav>
      </am-sub-nav>
      <am-nav-item name="sport">
        <div>nav 3</div>
      </am-nav-item>
    </am-nav>
    <h4>水平的顶部导航菜单</h4>
    <am-nav :selected.sync="selected" style="width:260px;">
      <am-nav-item name="music">
        <div>nav 1</div>
      </am-nav-item>
      <am-sub-nav name="book">
        <template slot="title">nav 2</template>
        <am-nav-item name="faction">小说</am-nav-item>
        <am-nav-item name="comic">动漫</am-nav-item>
        <am-sub-nav name="classis">
          <template slot="title">杂志期刊</template>
          <am-nav-item name="technology">科技</am-nav-item>
          <am-nav-item name="fashion">时尚</am-nav-item>
          <am-sub-nav name="social">
            <template slot="title">社会</template>
            <am-nav-item name="11">社会 1</am-nav-item>
            <am-nav-item name="22">社会 2</am-nav-item>
            <am-nav-item name="33">社会 3</am-nav-item>
          </am-sub-nav>
        </am-sub-nav>
      </am-sub-nav>
      <am-nav-item name="sport">
        <div>nav 3</div>
      </am-nav-item>
    </am-nav>
    <h3>使用方式</h3>
  </div>
</template>
<script>
import Nav from '../../../src/nav/nav'
import SubNav from '../../../src/nav/subNav'
import NavItem from '../../../src/nav/navItem'
export default {
  components: {
    AmNav: Nav,
    AmSubNav: SubNav,
    AmNavItem: NavItem
  },
  data() {
    return {
      selected: 'sport'
    }
  },
  watch: {
    selected(newValue) {
      if (newValue === 'sport') {
        alert(newValue)
      }
    }
  },
  methods: {
    clickFn(name) {
      if (name === 'music') {
        alert(name)
      }
    }
  }
}
</script>
