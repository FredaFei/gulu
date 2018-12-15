import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Pager from '../../src/pager/pager'

describe('Pager', () => {
  it('存在.', () => {
    expect(Pager).to.be.ok
  })
  it('可以设置 currentPage.', () => {
    const wrapper = mount(Pager, {
      propsData: {
        currentPage: 2,
        totalPage: 10
      }
    })
    expect(wrapper.find('[data-current="2"]').exists()).to.be.true
  })
  it('可以设置 totalPage',()=>{
    const wrapper = mount(Pager, {
      propsData: {
        currentPage: 4,
        totalPage: 20
      }
    })
    expect(wrapper.find('[data-page="20"]').exists()).to.be.true
  })
  it('默认 hideOnSinglePage 为true',()=>{
    const wrapper = mount(Pager, {
      propsData: {
        currentPage: 1,
        totalPage: 1
      }
    })
    expect(wrapper.classes('hide')).to.be.true
  })
  it('可以设置 hideOnSinglePage',()=>{
    const wrapper = mount(Pager, {
      propsData: {
        currentPage: 1,
        totalPage: 1,
        hideOnSinglePage: false
      }
    })
    expect(wrapper.classes('hide')).to.be.false
    expect(wrapper.isVisible()).to.be.true
  })
  it('可以设置 hideOnSinglePage',()=>{
    const wrapper = mount(Pager, {
      propsData: {
        currentPage: 1,
        totalPage: 1,
        hideOnSinglePage: false
      }
    })
    expect(wrapper.classes('hide')).to.be.false
    expect(wrapper.isVisible()).to.be.true
  })
  it('点击时可以改变 currentPage.', (done) => {
    const wrapper = mount(Pager, {
      propsData: {
        currentPage: 2,
        totalPage: 10
      }
    })
      wrapper.find('[data-page="3"].other').trigger('click')
      wrapper.setProps({ currentPage: 3 })
      setTimeout(()=>{
        expect(wrapper.find('[data-current="2"]').exists()).to.be.false
        expect(wrapper.find('[data-page="2"]').exists()).to.be.true
        expect(wrapper.find('[data-current="3"]').exists()).to.be.true
        done()
      })
  })
})
