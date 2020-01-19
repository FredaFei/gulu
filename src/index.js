import AmButton from './button/button.vue'
import AmButtonGroup from './button/buttonGroup'
import AmControllCount from './controllCount/index.vue'
import AmCascader from './cascader/cascader.vue'
import AmCascaderItem from './cascader/cascaderItem.vue'
import AmCollapse from './collapse/collapse.vue'
import AmCollapseItem from './collapse/collapseItem.vue'
import AmDatePicker from './datePicker/index.vue'
import AmCol from './grid/gCol.vue'
import AmRow from './grid/gRow.vue'
import AmInput from './input/input.vue'
import AmCheckbox from './checkbox/index.vue'
import AmRadio from './radio/index.vue'
import AmSelect from './select/index.vue'
import AmOption from './select/option.vue'
import AmTable from './table/index.vue'
import AmTableColumn from './table/tableColumn.vue'
import AmLayout from './layout/layout.vue'
import AmHeader from './layout/header.vue'
import AmAside from './layout/aside.vue'
import AmContent from './layout/content.vue'
import AmFooter from './layout/footer.vue'
import AmNav from './nav/nav.vue'
import AmNavItem from './nav/navItem.vue'
import AmSubNav from './nav/subNav.vue'
import AmPager from './pager/pager.vue'
import AmPopover from './popover/popover.vue'
import AmSlides from './slides/slides.vue'
import AmSlidesItem from './slides/slidesItem.vue'
import AmTabs from './tabs/tabs.vue'
import AmTabsHeader from './tabs/tabsHeader.vue'
import AmTabsItem from './tabs/tabsItem.vue'
import AmTabsBody from './tabs/tabsBody.vue'
import AmTabsPane from './tabs/tabsPane.vue'
import AmToast from './toast/index.js'
import AmMessage from './message/index.js'
import AmUploader from './uploader/uploader.vue'
import AmIcon from './icon.vue'
import AmCollapseTransition from './collapseTransition.vue'
import AmClickOutside from './clickOutside.js'
import Validator from './validate.js'

import '../style/index.scss'

const components = [
  AmButton,
  AmButtonGroup,
  AmControllCount,
  AmCascader,
  AmCascaderItem,
  AmCollapse,
  AmCollapseItem,
  AmDatePicker,
  AmCol,
  AmRow,
  AmInput,
  AmSelect,
  AmOption,
  AmCheckbox,
  AmRadio,
  AmTable,
  AmTableColumn,
  AmLayout,
  AmHeader,
  AmAside,
  AmContent,
  AmFooter,
  AmNav,
  AmNavItem,
  AmSubNav,
  AmPager,
  AmPopover,
  AmSlides,
  AmSlidesItem,
  AmTabs,
  AmTabsHeader,
  AmTabsItem,
  AmTabsBody,
  AmTabsPane,
  AmUploader,
  AmIcon,
  AmCollapseTransition
]
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.use(AmToast)
  Vue.use(AmMessage)
}
export default install
export {
  AmButton,
  AmButtonGroup,
  AmControllCount,
  AmCascader,
  AmCascaderItem,
  AmCollapse,
  AmCollapseItem,
  AmDatePicker,
  AmCol,
  AmRow,
  AmInput,
  AmCheckbox,
  AmRadio,
  AmSelect,
  AmOption,
  AmTable,
  AmTableColumn,
  AmLayout,
  AmHeader,
  AmAside,
  AmContent,
  AmFooter,
  AmNav,
  AmNavItem,
  AmSubNav,
  AmPager,
  AmPopover,
  AmSlides,
  AmSlidesItem,
  AmTabs,
  AmTabsHeader,
  AmTabsItem,
  AmTabsBody,
  AmTabsPane,
  AmToast,
  AmMessage,
  AmUploader,
  AmIcon,
  AmClickOutside,
  Validator,
  AmCollapseTransition
}
