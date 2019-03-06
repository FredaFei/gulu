import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount, shallowMount } from '@vue/test-utils'

import Vue from 'vue'
import Popover from '../../src/popover/popover'

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    let classs = wrapper.find('.am-popover-content').classes()
    expect(classs).to.include('position-bottom')
  })
  it('trigger默认为click', () => {
    const wrapper = mount(Popover, {
      attachToDocument: true,
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.am-popover-content').exists()).to.eq(true)
  })
  it('可以设置  trigger为hover', () => {
    const wrapper = mount(Popover, {
      propsData: {
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.am-popover-content').element).to.not.exist
    wrapper.find('.am-popover-wrapper').trigger('mouseenter')
    expect(wrapper.find('.am-popover-content').element).to.exist
    wrapper.find('.am-popover-wrapper').trigger('mouseleave')
    expect(wrapper.find('.am-popover-content').element).to.not.exist
  })
  it('可以设置 disabled.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      },
      propsData: {
        disabled: true,
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.am-popover-content').exists()).to.eq(false)
  })
  it('可以设置 zIndex.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      },
      propsData: {
        position: 'bottom',
        zIndex: 100
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.attributes('data-zindex')).to.be.eq('100')
  })
})
