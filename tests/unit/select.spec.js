import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {mount} from '@vue/test-utils'

import Vue from 'vue'
import AmSelect from '../../src/select/index'
import AmOption from '../../src/select/option'

Vue.component('am-select', AmSelect)
Vue.component('am-option', AmOption)

describe('AmSelect', () => {
  it('存在.', () => {
    expect(AmSelect).to.be.ok
  })
  it('设置 selected', () => {
    const wrapper = mount(AmSelect, {
      propsData: {
        selected: ''
      },
      slots: {
        default: `
          <am-option value="A">Apple</am-option>
          <am-option value="B">Banana</am-option>
          <am-option value="C">Cherry</am-option>
        `
      }
    })
    wrapper.setProps({'selected': 'B'})
    expect(wrapper.props().selected).to.eq('B')
  })
  it('设置 disabled', () => {
    const wrapper = mount(AmSelect, {
      propsData: {
        selected: '',
        disabled: true
      },
      slots: {
        default: `
          <am-option value="A">Apple</am-option>
          <am-option value="B">Banana</am-option>
          <am-option value="C">Cherry</am-option>
        `
      }
    })
    expect(wrapper.props().disabled).to.eq(true)
    expect(wrapper.classes('am-select-disabled')).to.eq(true)
    wrapper.find('.am-select').trigger('click')
    expect(wrapper.vm.$data.visible).to.eq(false)
  })
  it('设置 placeholder', () => {
    const wrapper = mount(AmSelect, {
      propsData: {
        selected: '',
        placeholder: '哈哈'
      },
    })
    expect(wrapper.props().placeholder).to.eq('哈哈')
  })
  it('设置 clearable', () => {
    const wrapper = mount(AmSelect, {
      propsData: {
        selected: 'B',
        clearable: true
      },
      slots: {
        default: `
          <am-option value="A">Apple</am-option>
          <am-option value="B">Banana</am-option>
          <am-option value="C">Cherry</am-option>
        `
      }
    })
    expect(wrapper.props().clearable).to.eq(true)
    wrapper.find('.am-select').trigger('mouseenter')
    expect(wrapper.find('.am-select-clear').exists()).to.eq(true)
  })

  it('设置 update:selected 事件', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmSelect, {
      attachToDocument: true,
      propsData: {
        selected: ''
      },
      slots: {
        default: `
          <am-option value="A">Apple</am-option>
          <am-option value="B">Banana</am-option>
          <am-option value="C">Cherry</am-option>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    wrapper.find('.am-select').trigger('click')
    wrapper.find('[data-name="B"]').trigger('click')
    expect(callback).to.have.been.calledWith('B')
    console.log(wrapper.html());
    expect(wrapper.find('.am-select-options').isVisible()).to.eq(false)
    wrapper.destroy()
    // setTimeout(() => {
    //   done()
    // }, 20)
  })

  it('设置 clear 事件', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmSelect, {
      propsData: {
        selected: 'A',
        clearable: true,
        disabled: false,
      },
      slots: {
        default: `
          <am-option value="A">Apple</am-option>
          <am-option value="B">Banana</am-option>
          <am-option value="C">Cherry</am-option>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })

    console.log(wrapper.html());
    // wrapper.find('.am-select').trigger('mouseenter')
    wrapper.setData({inputHovering: true})
    const el = wrapper.find('.am-select-clear')
    expect(el.exists()).to.eq(true)
    el.trigger('click')
    expect(callback).to.have.been.calledWith("")

    console.log(111);
    console.log(wrapper.html());
    // expect(wrapper.find('.am-select-clear').exists()).to.eq(false)
  })
})
