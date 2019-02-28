<template>
  <div>
    <h4>click 触发</h4>
    <!-- <g-tabs :selected.sync="selectedTabs1">
      <g-tabs-header>
        <g-tabs-item name="sport1">财经</g-tabs-item>
        <g-tabs-item name="music2" class="music2">music1</g-tabs-item>
        <g-tabs-item name="moving3">moving1</g-tabs-item>
      </g-tabs-header>
      <g-tabs-body>
        <g-tabs-pane name="sport1">sport content</g-tabs-pane>
        <g-tabs-pane name="music2">music content</g-tabs-pane>
        <g-tabs-pane name="moving3">moving content</g-tabs-pane>
      </g-tabs-body>
    </g-tabs> -->
    <g-tabs :selected.sync="selectedTabs2" direction="vertical">
      <g-tabs-header>
        <g-tabs-item name="sport">
          <g-icon name="settings"></g-icon>
          <span>sport</span>
        </g-tabs-item>
        <g-tabs-item name="music">music</g-tabs-item>
        <g-tabs-item name="moving">moving</g-tabs-item>
      </g-tabs-header>
      <g-tabs-body>
        <g-tabs-pane name="sport">sport content</g-tabs-pane>
        <g-tabs-pane name="music">music content</g-tabs-pane>
        <g-tabs-pane name="moving">moving content</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
import Icon from "../../../src/icon";
import Tabs from "../../../src/tabs/tabs";
import TabsHeader from "../../../src/tabs/tabsHeader";
import TabsItem from "../../../src/tabs/tabsItem";
import TabsBody from "../../../src/tabs/tabsBody";
import TabsPane from "../../../src/tabs/tabsPane";
export default {
  components: {
    GIcon: Icon,
    GTabs: Tabs,
    GTabsHeader: TabsHeader,
    GTabsItem: TabsItem,
    GTabsBody: TabsBody,
    GTabsPane: TabsPane
  },
  data() {
    return {
      selectedTabs1: "sport1",
      selectedTabs2: "sport"
    };
  }
};
</script>
<style>
</style>

