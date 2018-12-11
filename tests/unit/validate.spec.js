import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import validate from '../../src/validate.js'

describe('validate', () => {
  it('validate 存在.', () => {
    expect(validate).to.be.ok
  })
  it('required 为必填.', () => {
    var data = {
      email: ''
    }
    var rules = [
      { key: 'email', required: true },
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('required 为0时候必填.', () => {
    var data = {
      email: 0
    }
    var rules = [
      { key: 'email', required: true },
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern 自定义时格式不正确.', () => {
    var data = {
      email: '@xx.cn',
    }
    var rules = [
      { key: 'email', required: true, pattern: /^.+@.+$/ },
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.exist
  })
  it('pattern 格式不正确.', () => {
    var data = {
      email: '@xx.cn',
    }
    var rules = [
      { key: 'email', required: true, pattern: 'email' },
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.exist
  })
  it('pattern 格式正确.', () => {
    var data = {
      email: '13@ccl.op'
    }
    var rules = [
      { key: 'email', required: true, pattern: 'email' }
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  xit('pattern 格式正确.', () => {
    var data = {
      email: '',
      // password: '123'
    }
    var rules = [
      { key: 'email', required: true, pattern: /^.+@.+$/ },
      // { key: 'password', pattern: '', minLength: 6 }
    ]
    let errors = validate(data, rules)
    console.log(errors)
    expect(errors.email.required).to.eq('必填')
  })
})
