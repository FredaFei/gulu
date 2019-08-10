import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Message from '../../src/message/message'

describe('Message', () => {
  const Constructor = Vue.extend(Message)
  let vm
  // afterEach(() => {
  //   vm.$destroy()
  // })
  it('存在.', () => {
    expect(Message).to.be.ok
  })
  // it('可以设置 title.', () => {
  //   vm = new Constructor({ propsData: { title: 'test'} }).$mount()
  //   // todo
  // })
  // it('接受 enableHtml 属性', () => {
  //   vm = new Constructor({
  //     propsData: {
  //       enableHtml: true
  //     }
  //   })
  //   vm.$slots.default = ['<strong id="test">test strong</strong>']
  //   vm.$mount()
  //   let strong = vm.$el.querySelector('#test')
  //   expect(strong).to.exist
  // })
  // it('可以设置 zIndex.', () => {
  //   vm = new Constructor({ propsData: { zIndex: 99 } }).$mount()
  //   expect(vm.$el.style.zIndex).to.eq('99')
  // })
})
