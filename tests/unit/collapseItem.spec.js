import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount, shallowMount } from '@vue/test-utils'

import Vue from 'vue'
import CollapseItem from '../../src/collapse/collapseItem'

describe('CollapseItem', done => {
  it('存在.', () => {
    expect(CollapseItem).to.be.ok
  })
  it('可以设置 name.', () => {
    const wrapper = mount(CollapseItem, {
      propsData: {
        name: 'test1',
        title: 'title oo'
      }
    })
    expect(wrapper.find('[data-name="test1"]').exists()).to.be.true
  })
  it('visibleIcon 默认为true.', () => {
    const wrapper = mount(CollapseItem, {
      inject: ['eventBus'],
      propsData: {
        name: 'test1',
        title: 'title oo'
      }
    })
    expect(wrapper.find('.g-icon-animation').exists()).to.be.true
  })
  it('可以设置 visibleIcon.', () => {
    const wrapper = mount(CollapseItem, {
      inject: ['eventBus'],
      propsData: {
        name: 'test1',
        title: 'title oo',
        visibleIcon: false
      }
    })
    expect(wrapper.find('.g-icon-animation').exists()).to.be.false
  })
  it('可以设置 title.', () => {
    const wrapper = mount(CollapseItem, {
      propsData: {
        name: 'test1',
        title: 'title oo'
      }
    })
    expect(wrapper.find('.gulu-collapse-item-name').text()).to.be.eq('title oo')
  })
})
