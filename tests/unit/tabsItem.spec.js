import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Tabs from '@/tabs'
import TabsHeader from '@/tabsHeader'
import TabsBody from '@/tabsBody'
import TabsItem from '@/tabsItem'
import TabsPane from '@/tabsPane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-header', TabsHeader)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(TabsItem)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受 name 属性 ', () => {
            vm = new Constructor({
                propsData: {
                    name: 'test2'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('test2')
            vm.$el.remove
        })
        it('可以设置 disabled .', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const element = vm.$el
            expect(element.classList.contains('disabled')).to.eq(true)
            const callback = sinon.fake()
            vm.$on('click',callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })
    })
})
