import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import Validator from '../../src/validate.js'

describe('Validator', () => {
  it('Validator 存在.', () => {
    expect(Validator).to.be.ok
  })
  it('required 为必填.', () => {
    var data = {
      email: ''
    }
    var rules = [{ key: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('required 为0时候必填.', () => {
    var data = {
      email: 0
    }
    var rules = [{ key: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern 自定义时格式不正确.', () => {
    var data = {
      email: '@xx.cn'
    }
    var rules = [{ key: 'email', pattern: /^.+@.+$/ }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.pattern).to.exist
  })
  it('pattern 格式不正确.', () => {
    var data = {
      email: '@xx.cn'
    }
    var rules = [{ key: 'email', pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.pattern).to.exist
  })
  it('pattern 格式正确.', () => {
    var data = {
      email: '13@ccl.op'
    }
    var rules = [{ key: 'email', pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('required & pattern .', () => {
    var data = {
      email: ''
    }
    var rules = [{ key: 'email', required: true, pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.exist
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('pattern & minLength.', () => {
    var data = {
      password: '11a'
    }
    var rules = [{ key: 'password', pattern: /^\d+$/, minLength: 6 }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.password.pattern).to.exist
    expect(errors.password.minLength).to.exist
  })
  it('pattern & maxLength.', () => {
    var data = {
      password: '1100000'
    }
    var rules = [{ key: 'password', pattern: /^\d+$/, maxLength: 10 }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.password.pattern).to.not.exist
    expect(errors.password.maxLength).to.exist
  })
  it('throw error.', () => {
    var data = {
      password: '1100000'
    }
    var rules = [{ key: 'password', hasName: true }]
    let validator = new Validator()
    let fn = function() {
      validator.validate(data, rules)
    }
    expect(fn).to.throw()
  })
  it('自定义 实例的验证器', () => {
    var data = {
      orderId: 'haha'
    }
    var rules = [{ key: 'orderId', required: true, hasNumber: true }]
    let validator1 = new Validator()
    validator1.hasNumber = value => {
      if (!/\d/.test(value)) {
        return '必须要有数字'
      }
    }
    let errors
    let fn = () => {
      errors = validator1.validate(data, rules)
    }
    expect(fn).to.not.throw()
    expect(errors.orderId.hasNumber).to.eq('必须要有数字')
  })
  it('实力多次互不影响', () => {
    var data = {
      orderId: 'haha'
    }
    var rules = [{ key: 'orderId', required: true, hasNumber: true }]
    let validator1 = new Validator()
    let validator2 = new Validator()
    validator1.hasNumber = value => {
      if (!/\d/.test(value)) {
        return '必须要有数字'
      }
    }
    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.throw()
  })
  it('全局添加自定义验证器', () => {
    var data = {
      orderId: 'haha'
    }
    var rules = [{ key: 'orderId', required: true, hasNumber: true }]
    Validator.add('hasNumber', value => {
      if (!/\d/.test(value)) {
        return '必须要有数字'
      }
    })
    let validator1 = new Validator()
    console.log(validator1.validate(data, rules))
    let validator2 = new Validator()
    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.not.throw()
  })
})
