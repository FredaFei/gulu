import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'

import AmCheckbox from '../../src/checkbox/index'

describe('AmCheckbox', () => {
  it('存在.', () => {
    expect(AmCheckbox).to.be.ok
  })
  it('value', () => {
    const wrapper = mount(AmCheckbox, {
      propsData: {
        value: 12
      }
    })
    console.log(wrapper)
  })
})
