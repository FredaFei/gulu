import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHeader from '../../src/tabs/tabsHeader'
import TabsBody from '../../src/tabs/tabsBody'
import TabsItem from '../../src/tabs/tabsItem'
import TabsPane from '../../src/tabs/tabsPane'

Vue.component('am-tabs', Tabs)
Vue.component('am-tabs-header', TabsHeader)
Vue.component('am-tabs-body', TabsBody)
Vue.component('am-tabs-item', TabsItem)
Vue.component('am-tabs-pane', TabsPane)

describe('TabsHeader', () => {
  it('存在.', () => {
    expect(TabsHeader).to.be.ok
  })
})
