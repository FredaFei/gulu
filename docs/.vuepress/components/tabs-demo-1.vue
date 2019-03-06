<template>
  <div>
    <div class="box">
      <h4>Tabs 默认定位</h4>
      <am-tabs :selected.sync="selectedTabs1">
        <am-tabs-header>
          <am-tabs-item name="finance">财经</am-tabs-item>
          <am-tabs-item name="sport">体育</am-tabs-item>
          <am-tabs-item name="comic">娱乐</am-tabs-item>
        </am-tabs-header>
        <am-tabs-body>
          <am-tabs-pane name="finance">财经 content</am-tabs-pane>
          <am-tabs-pane name="sport">体育 content</am-tabs-pane>
          <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
        </am-tabs-body>
      </am-tabs>
    </div>
    <div class="box">
      <h4>Tabs 垂直定位</h4>
      <am-tabs :selected.sync="selectedTabs2" direction="vertical">
        <am-tabs-header>
          <am-tabs-item name="finance">财经</am-tabs-item>
          <am-tabs-item name="sport">体育</am-tabs-item>
          <am-tabs-item name="comic">娱乐</am-tabs-item>
        </am-tabs-header>
        <am-tabs-body>
          <am-tabs-pane name="finance">财经 content</am-tabs-pane>
          <am-tabs-pane name="sport">体育 content</am-tabs-pane>
          <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
        </am-tabs-body>
      </am-tabs>
    </div>
    <div class="box">
      <h4>自定义tabs</h4>
      <am-tabs :selected.sync="selectedTabs3">
        <am-tabs-header>
          <am-tabs-item name="finance">财经 <am-icon name="thumbs-up"></am-icon>
          </am-tabs-item>
          <am-tabs-item name="sport">体育</am-tabs-item>
          <am-tabs-item name="comic">娱乐</am-tabs-item>
          <am-button slot="actions">更多</am-button>
        </am-tabs-header>
        <am-tabs-body>
          <am-tabs-pane name="finance">财经 content</am-tabs-pane>
          <am-tabs-pane name="sport">体育 content</am-tabs-pane>
          <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
        </am-tabs-body>
      </am-tabs>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <am-tabs :selected.sync="selectedTabs4" direction="vertical">
        <am-tabs-header>
          <am-tabs-item name="finance">财经</am-tabs-item>
          <am-tabs-item name="sport" disabled>体育</am-tabs-item>
          <am-tabs-item name="comic">娱乐</am-tabs-item>
        </am-tabs-header>
        <am-tabs-body>
          <am-tabs-pane name="finance">财经 content</am-tabs-pane>
          <am-tabs-pane name="sport">体育 content</am-tabs-pane>
          <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
        </am-tabs-body>
      </am-tabs>
    </div>
  </div>
</template>
<script>
import AmIcon from "../../../src/icon";
import AmButton from "../../../src/button/button";
import AmTabs from "../../../src/tabs/tabs";
import AmTabsHeader from "../../../src/tabs/tabsHeader";
import AmTabsItem from "../../../src/tabs/tabsItem";
import AmTabsBody from "../../../src/tabs/tabsBody";
import AmTabsPane from "../../../src/tabs/tabsPane";
export default {
  components: {
    AmIcon,
    AmButton,
    AmTabs,
    AmTabsHeader,
    AmTabsItem,
    AmTabsBody,
    AmTabsPane
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
  paddinam-bottom: 14px;
}
</style>

