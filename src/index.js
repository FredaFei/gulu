export { Button } from './button/button.vue'
export { ButtonGroup } from './button/buttonGroup'
export { Cascader } from './cascader/cascader.vue'
export { CascaderItem } from './cascader/cascaderItem.vue'
export { Collapse } from './collapse/collapse.vue'
export { CollapseItem } from './collapse/collapseItem.vue'
export { DatePicker } from './datePicker/datePicker.vue'
export { Moment } from './datePicker/moment.js'
export { Col } from './grid/gCol.vue'
export { Row } from './grid/gRow.vue'
export { Input } from './input/input.vue'
export { Layout } from './layout/layout.vue'
export { Header } from './layout/header.vue'
export { Sider } from './layout/sider.vue'
export { Content } from './layout/content.vue'
export { Footer } from './layout/footer.vue'
export { Nav } from './nav/nav.vue'
export { NavItem } from './nav/navItem.vue'
export { SubNav } from './nav/subNav.vue'
export { Pager } from './pager/pager.vue'
export { Popover } from './popover/popover.vue'
export { Slides } from './slides/slides.vue'
export { SlidesItem } from './slides/slidesItem.vue'
export { Tabs } from './tabs/tabs.vue'
export { TabsHeader } from './tabs/tabsHeader.vue'
export { TabsItem } from './tabs/tabsItem.vue'
export { TabsBody } from './tabs/tabsBody.vue'
export { TabsPane } from './tabs/tabsPane.vue'
export { Toast } from './toast/toast.vue'
export { Uploader } from './uploader/uploader.vue'
export { Icon } from './icon.vue'
export { CollapseTransition } from './collapseTransition.vue'
export { ClickOutside } from './clickOutside.js'
export { Plugin } from './plugin.js'

const components = [Button, ButtonGroup, Cascader, CascaderItem]

const install = function(Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
  Button,
  ButtonGroup,
  Cascader,
  CascaderItem
}
