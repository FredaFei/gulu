import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import CollapseItem from '@/collapse/collapseItem'

describe('CollapseItem', (done) => {
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
  it('可以设置 title.', () => {
    const wrapper = mount(CollapseItem, {
      propsData: {
        name: 'test1',
        title: 'title oo'
      }
    })
    expect(wrapper.find('.title').text()).to.be.eq('title oo')
  })
})
