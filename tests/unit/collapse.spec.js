import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Collapse from '../../src/collapse/collapse'
import CollapseItem from '../../src/collapse/collapseItem'

Vue.component('g-collapse-item', CollapseItem)

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).to.be.ok
  })
  it('可以设置 single.', done => {
    const callback = sinon.fake()
    const wrapper = mount(Collapse, {
      propsData: {
        single: true,
        selected: ['apple'],
        attachToDocument: true
      },
      slots: {
        default: `
        <g-collapse-item title="title_1" name="apple"><span id="content_1">content_1</span></g-collapse-item>
        <g-collapse-item title="title_2" name="orange"><span id="content_2">content_2</span></g-collapse-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="apple"].active').exists()).to.be.true
      wrapper.find('[data-name="orange"]').trigger('click')
      expect(callback).to.have.been.calledWith(['orange'])
      expect(wrapper.find('[data-name="orange"].active').exists()).to.be.true
      expect(wrapper.find('[data-name="apple"].active').exists()).to.be.false
      done()
    })
  })
  it('selected 默认为空数组.', done => {
    const callback = sinon.fake()
    const wrapper = mount(Collapse, {
      propsData: {
        single: true,
        attachToDocument: true
      },
      slots: {
        default: `
        <g-collapse-item title="title_1" name="apple"><span id="content_1">content_1</span></g-collapse-item>
        <g-collapse-item title="title_2" name="orange"><span id="content_2">content_2</span></g-collapse-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.active').exists()).to.be.false
      done()
    })
  })
  it('single 默认为false.', done => {
    const callback = sinon.fake()
    const wrapper = mount(Collapse, {
      propsData: {
        selected: ['apple'],
        attachToDocument: true
      },
      slots: {
        default: `
        <g-collapse-item title="title_1" name="apple"><span id="content_1">content_1</span></g-collapse-item>
        <g-collapse-item title="title_2" name="orange"><span id="content_2">content_2</span></g-collapse-item>
        <g-collapse-item title="title_2" name="banana"><span id="content_2">content_2</span></g-collapse-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="apple"].active').exists()).to.be.true
      wrapper.find('[data-name="banana"]').trigger('click')
      expect(wrapper.find('[data-name="banana"].active').exists()).to.be.true
      expect(callback).to.have.been.calledWith(['apple', 'banana'])
      done()
    })
  })
  it('关闭打开的collapseItem', done => {
    const callback = sinon.fake()
    const wrapper = mount(Collapse, {
      propsData: {
        selected: ['apple'],
        attachToDocument: true
      },
      slots: {
        default: `
        <g-collapse-item title="title_1" name="apple"><span id="content_1">content_1</span></g-collapse-item>
        <g-collapse-item title="title_2" name="orange"><span id="content_2">content_2</span></g-collapse-item>
        <g-collapse-item title="title_2" name="banana"><span id="content_2">content_2</span></g-collapse-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('[data-name="apple"]').trigger('click')
      expect(callback).to.have.been.calledWith([])
      expect(wrapper.find('[data-name="apple"].active').exists()).to.be.false
      done()
    })
  })
})
