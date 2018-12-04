import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Collapse from '@/collapse/collapse'
import CollapseItem from '@/collapse/collapseItem'

Vue.component('g-collapse-item', CollapseItem)

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).to.be.ok
  })
  it('selected 默认为第一个子元素.', (done) => {
    const wrapper = mount(Collapse, {
      slots: {
        default: `
        <g-collapse-item title="title_1" name="1"><span id="content_1">content_1</span></g-collapse-item>
        <g-collapse-item title="title_2" name="2"><span id="content_2">content_2</span></g-collapse-item>
        <g-collapse-item title="title_3" name="3"><span id="content_3">content_3</span></g-collapse-item>
        <g-collapse-item title="title_4" name="4"><span id="content_4">content_4</span></g-collapse-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('#content_1').exists()).to.be.true
      done()
    })
  })
  it('可以设置 single.', (done) => {
    const wrapper = mount(Collapse, {
      propsData: {
        single: true,
        selected: ['1']
      },
      slots: {
        default: `
        <g-collapse-item title="title_1" name="1"><span id="content_1">content_1</span></g-collapse-item>
        <g-collapse-item title="title_2" name="2"><span id="content_2">content_2</span></g-collapse-item>
        <g-collapse-item title="title_3" name="3"><span id="content_3">content_3</span></g-collapse-item>
        <g-collapse-item title="title_4" name="4"><span id="content_4">content_4</span></g-collapse-item>
        `
      }
    })
    setTimeout(() => {
      wrapper.find('[data-name="2"]').trigger('click')
      expect(wrapper.contains('#content_1')).to.be.false
      expect(wrapper.find('#content_2').exists()).to.be.true
      done()
    })
  })
})
