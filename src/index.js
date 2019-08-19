import Button from './button/button.vue'
import ButtonGroup from './button/buttonGroup'
import Cascader from './cascader/cascader.vue'
import CascaderItem from './cascader/cascaderItem.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapseItem.vue'
import DatePicker from './datePicker/datePicker.vue'
import Col from './grid/gCol.vue'
import Row from './grid/gRow.vue'
import Input from './input/input.vue'
import Checkbox from './checkbox/index.vue'
import Radio from './radio/index.vue'
import Select from './select/index.vue'
import Option from './select/option.vue'
import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Aside from './layout/aside.vue'
import Content from './layout/content.vue'
import Footer from './layout/footer.vue'
import Nav from './nav/nav.vue'
import NavItem from './nav/navItem.vue'
import SubNav from './nav/subNav.vue'
import Pager from './pager/pager.vue'
import Popover from './popover/popover.vue'
import Slides from './slides/slides.vue'
import SlidesItem from './slides/slidesItem.vue'
import Tabs from './tabs/tabs.vue'
import TabsHeader from './tabs/tabsHeader.vue'
import TabsItem from './tabs/tabsItem.vue'
import TabsBody from './tabs/tabsBody.vue'
import TabsPane from './tabs/tabsPane.vue'
import Toast from './toast/index.js'
import Uploader from './uploader/uploader.vue'
import Icon from './icon.vue'
import CollapseTransition from './collapseTransition.vue'
import ClickOutside from './clickOutside.js'

const components = [
  Button,
  ButtonGroup,
  Cascader,
  CascaderItem,
  Collapse,
  CollapseItem,
  DatePicker,
  Col,
  Row,
  Input,
  Checkbox,
  Radio,
  Layout,
  Header,
  Aside,
  Content,
  Footer,
  Nav,
  NavItem,
  SubNav,
  Pager,
  Popover,
  Slides,
  SlidesItem,
  Tabs,
  TabsHeader,
  TabsItem,
  TabsBody,
  TabsPane,
  Uploader,
  Icon,
  CollapseTransition
]
const install = (Vue, opts = {}) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    Vue.use(Toast)
}
export default install
export {
  Button,
  ButtonGroup,
  Cascader,
  CascaderItem,
  Collapse,
  CollapseItem,
  DatePicker,
  Col,
  Row,
  Input,
  Checkbox,
  Radio,
  Select,
  Option,
  Layout,
  Header,
  Aside,
  Content,
  Footer,
  Nav,
  NavItem,
  SubNav,
  Pager,
  Popover,
  Slides,
  SlidesItem,
  Tabs,
  TabsHeader,
  TabsItem,
  TabsBody,
  TabsPane,
  Toast,
  Uploader,
  Icon,
  ClickOutside,
  CollapseTransition
}
