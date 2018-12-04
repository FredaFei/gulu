import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

import GRow from '../../../src/grid/gRow'
import GCol from '../../../src/grid/gCol'

describe('GRow', () => {
    it('存在.', () => {
        expect(GRow).to.be.ok
    })
    describe('props', () => {
        it('可以设置gutter.', () => {
            Vue.component('g-col', GCol)
            Vue.component('g-row', GRow)
            const wrapper = mount(GRow, {
                slots: {
                    default: [`<g-row gutter="20">
                    <g-col span="12">2</g-col>
                    <g-col span="6">6</g-col>
                    <g-col span="6">4</g-col>
                </g-row>`]
                },
                attachToDocument: true
            })
            const { vm } = wrapper
            const rowEl = vm.$el.querySelectorAll('.row')[0]
            expect(getComputedStyle(rowEl).marginLeft).to.eq('-10px')
            expect(getComputedStyle(rowEl).marginRight).to.eq('-10px')
        })
        it('接受 align 属性', () => {
            const wrapper = mount(GRow, {
                attachToDocument: true,
                propsData: {
                    align: 'right'
                }
            })
            expect(wrapper.classes('align-right')).to.eq(true)
        })
    })
})
