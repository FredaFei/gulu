<template>
  <div class="example-box">
    <p><strong>默认定位</strong></p>
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
    <p><strong>垂直定位</strong></p>
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
    <p><strong>自定义下标线高度</strong></p>
    <am-tabs :selected.sync="selectedTabs2" direction="vertical" lineWidthOrHeight="26">
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
    <p><strong>自定义tabs</strong></p>
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
    <p><strong>禁用状态</strong></p>
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
</template>
<script>
import { AmIcon, AmButton, AmTabs, AmTabsHeader, AmTabsItem, AmTabsBody, AmTabsPane } from "../../../src/index";

export default {
  components: { AmIcon, AmButton, AmTabs, AmTabsHeader, AmTabsItem, AmTabsBody, AmTabsPane },
  data() {
    return {
      selectedTabs1: "finance",
      selectedTabs2: "comic",
      selectedTabs3: "sport",
      selectedTabs4: "comic",
      selectedTabs5: "comic",
    };
  }
};
</script>
<style scoped>
.box {
  padding-bottom: 14px;
}
</style>

