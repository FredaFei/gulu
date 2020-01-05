import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
import {mount} from '@vue/test-utils'

import AmCheckbox from '../../src/checkbox/index'

describe('AmCheckbox', () => {
  it('存在.', () => {
    expect(AmCheckbox).to.be.ok
  })
  it('设置 disabled', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: true,
        disabled: true
      }
    })
    wrapper.trigger('click')
    expect(callback).to.not.have.been.called
  })
  it('设置 name', () => {
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: true,
        name: 'ha'
      }
    })
    expect(wrapper.props('name')).to.eq('ha')
  })
  it('设置 indeterminate', () => {
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: false,
        indeterminate: true
      }
    })
    expect(wrapper.classes('am-checkbox-indeterminate')).to.eq(true)
    expect(wrapper.props('indeterminate')).to.eq(true)
  })
  it('设置 v-model 为布尔', () => {
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: true
      }
    })
    expect(wrapper.props('model')).to.eq(true)
  })
  it('设置 v-model 为字符串, 默认不选中', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      attachToDocument: true,
      propsData: {
        model: '',
        value: 'a'
      },
      listeners: {
        'change': callback
      }
    })
    wrapper.trigger('click')
    expect(callback).to.have.been.calledWith('a')
  })
  it('设置 v-model 为字符串, 默认选中', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      attachToDocument: true,
      propsData: {
        model: 'a',
        value: 'a'
      },
      listeners: {
        'change': callback
      }
    })
    wrapper.trigger('click')
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('')
      done()
    }, 20)
  })
  it('设置 v-model 为数组,默认为空数组', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: [],
        value: '1'
      },
      listeners: {
        'change': callback
      }
    })
    expect(wrapper.classes('am-checkbox-checked')).to.eq(false)
    wrapper.trigger('click')
    setTimeout(() => {
      expect(callback).to.have.been.calledWith(['1'])
      done()
    }, 20)
  })
  it('设置 v-model 为数组,默认选中一个', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: ['1'],
        value: '1'
      },
      listeners: {
        'change': callback
      }
    })
    expect(wrapper.classes('am-checkbox-checked')).to.eq(true)
    wrapper.trigger('click')
    setTimeout(() => {
      expect(callback).to.have.been.calledWith([])
      done()
    }, 20)
  })
  it('trueValue 默认为 true,falseValue 默认为 false, 设置model 为false', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: false
      },
      listeners: {
        'change': callback
      }
    })
    wrapper.trigger('click')
    expect(callback).to.have.been.calledWith(true)
  })
  it('trueValue 默认为 true,falseValue 默认为 false, 设置model 为false', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmCheckbox, {
      propsData: {
        model: true
      },
      listeners: {
        'change': callback
      }
    })
    wrapper.trigger('click')
    expect(callback).to.have.been.calledWith(false)
  })
})
