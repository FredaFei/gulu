<template>
  <div>
    <h3>代码演示</h3>
    <h4>click 触发</h4>
    <g-tabs :selected.sync="selectedTabs" @update:selected="selectedFn">
      <g-tabs-header>
        <g-tabs-item name="sport">
          <g-icon name="settings"></g-icon>
          sport
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
    <h3>使用方式</h3>
  </div>
</template>
<script>
import Icon from '../../../src/icon'
import Tabs from '../../../src/tabs/tabs'
import TabsHeader from '../../../src/tabs/tabsHeader'
import TabsItem from '../../../src/tabs/tabsItem'
import TabsBody from '../../../src/tabs/tabsBody'
import TabsPane from '../../../src/tabs/tabsPane'
export default {
  components: {
    'GIcon': Icon,
    'GTabs': Tabs,
    'GTabsHeader': TabsHeader,
    'GTabsItem': TabsItem,
    'GTabsBody': TabsBody,
    'GTabsPane': TabsPane
  },
  data(){
    return {
      selectedTabs: 'sport',
    }
  },
  methods: {
    selectedFn() {
      console.log('popover')
    }
  }
}
</script>
<style lang="scss">
</style>

