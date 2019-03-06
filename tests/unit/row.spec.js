import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

import GRow from '../../src/grid/gRow'
import GCol from '../../src/grid/gCol'

describe('GRow', () => {
  it('存在.', () => {
    expect(GRow).to.be.ok
  })
  describe('props', () => {
    it('可以设置gutter.', () => {
      Vue.component('am-col', GCol)
      Vue.component('am-row', GRow)
      const wrapper = mount(GRow, {
        slots: {
          default: [
            `<am-row gutter="20">
                    <am-col span="12">2</am-col>
                    <am-col span="6">6</am-col>
                    <am-col span="6">4</am-col>
                </am-row>`
          ]
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
