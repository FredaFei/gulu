import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {mount} from '@vue/test-utils'
import ControllCount from '../../src/controllCount/index'

describe('ControllCount', () => {
  it('存在.', () => {
    expect(ControllCount).to.be.ok
  })
  describe('props', () => {
    it('设置 count.', () => {
      const wrapper = mount(ControllCount, {
        propsData: {
          count: 2
        }
      })
      expect(wrapper.props('count')).to.eq(2)
    })
    it('默认 maxCount.', () => {
      const wrapper = mount(ControllCount)
      expect(wrapper.props('maxCount')).to.eq(10)
    })
    it('设置 maxCount.', () => {
      const wrapper = mount(ControllCount, {
        propsData: {
          maxCount: 5
        }
      })
      expect(wrapper.props('maxCount')).to.eq(5)
    })
  })
  it('点击 button 触发 update:count 事件', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(ControllCount, {
      propsData: {
        count: 1,
        maxCount: 2
      },
      listeners: {
        'update:count': callback
      }
    })
    wrapper.find('.next').trigger('click')
    setTimeout(() => {
      expect(callback).to.have.been.calledWith(2)
      done()
    })
  })
  it('点击 prev btn 不触发 update:count 事件', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(ControllCount, {
      propsData: {
        count: 1,
        maxCount: 4
      },
      listeners: {
        'update:count': callback
      }
    })
    wrapper.find('.prev').trigger('click')
    setTimeout(() => {
      expect(callback).to.not.been.called
      done()
    })
  })
  it('点击 next btn 不触发 update:count 事件', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(ControllCount, {
      propsData: {
        count: 1,
        maxCount: 1
      },
      listeners: {
        'update:count': callback
      }
    })
    wrapper.find('.next').trigger('click')
    setTimeout(() => {
      expect(callback).to.not.been.called
      done()
    })
  })
})
