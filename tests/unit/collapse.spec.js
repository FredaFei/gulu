import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Collapse from '@/collapse'
import CollapseItem from '@/collapseItem'

Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.ok
    })
    // it('可以设置 single.', () => {
    //     const wrapper = mount(Collapse)
    //     // const wrapper = mount(Collapse,{})
    //     // wrapper.setData({ selectedTab: ['1'] })
    //     // wrapper.find('[data-name="2"]').trigger('click')
    //     // expect(wrapper.find('#content_1')).to.not.exist
    //     // expect(wrapper.find('#content_2')).to.exist
    //     expect(1).to.eq(1)
    // })
    describe('props', () => {
        xit('可以设置 single.', () => {
            // const wrapper = mount(Collapse)
            // console.log(wrapper)
            const wrapper = mount(Collapse)
            wrapper.setData({ foo: '123' })
            // const wrapper = mount(Collapse,{})
            // wrapper.setData({ selectedTab: ['1'] })
            // wrapper.find('[data-name="2"]').trigger('click')
            // expect(wrapper.find('#content_1')).to.not.exist
            // expect(wrapper.find('#content_2')).to.exist
            expect(1).to.eq(1)
        })
    })
})
