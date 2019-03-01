<template>
  <div>
    <div class="box">
      <h4>Tabs 默认定位</h4>
      <g-tabs :selected.sync="selectedTabs1">
        <g-tabs-header>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sport">体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div class="box">
      <h4>Tabs 垂直定位</h4>
      <g-tabs :selected.sync="selectedTabs2" direction="vertical">
        <g-tabs-header>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sport">体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div class="box">
      <h4>自定义tabs</h4>
      <g-tabs :selected.sync="selectedTabs3">
        <g-tabs-header>
          <g-tabs-item name="finance">财经 <g-icon name="thumbs-up"></g-icon>
          </g-tabs-item>
          <g-tabs-item name="sport">体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
          <g-button slot="actions">更多</g-button>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <g-tabs :selected.sync="selectedTabs4" direction="vertical">
        <g-tabs-header>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sport" disabled>体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
  </div>
</template>
<script>
import GIcon from "../../../src/icon";
import GButton from "../../../src/button/button";
import GTabs from "../../../src/tabs/tabs";
import GTabsHeader from "../../../src/tabs/tabsHeader";
import GTabsItem from "../../../src/tabs/tabsItem";
import GTabsBody from "../../../src/tabs/tabsBody";
import GTabsPane from "../../../src/tabs/tabsPane";
export default {
  components: {
    GIcon,
    GButton,
    GTabs,
    GTabsHeader,
    GTabsItem,
    GTabsBody,
    GTabsPane
  },
  data() {
    return {
      selectedTabs1: "finance",
      selectedTabs2: "comic",
      selectedTabs3: "comic",
      selectedTabs4: "comic"
    };
  }
};
</script>
<style>
.box {
  padding-bottom: 14px;
}
</style>

