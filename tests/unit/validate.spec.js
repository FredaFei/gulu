import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import Validator from '../../src/validate.js'

describe('Validator', () => {
  it('Validator 存在.', () => {
    expect(Validator).to.be.ok
  })
  it('required 为必填.', () => {
    let data = {
      email: ''
    }
    let rules = [{ key: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email[0]).to.eq('必填')
  })
  it('required 为0时非必填.', () => {
    let data = {
      email: 0
    }
    let rules = [{ key: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('isEmpty', () => {
    let data = {
      email: '@xx.cn'
    }
    let rules = [{ key: 'email', required: true }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(validator.isEmpty(errors)).to.eq(true)
  })
  it('pattern 自定义时格式不正确.', () => {
    let data = {
      email: '@xx.cn'
    }
    let rules = [{ key: 'email', pattern: /^.+@.+$/ }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.exist
  })
  it('pattern 格式不正确.', () => {
    let data = {
      email: '@xx.cn'
    }
    let rules = [{ key: 'email', pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.exist
  })
  it('pattern 格式正确.', () => {
    let data = {
      email: '13@ccl.op'
    }
    let rules = [{ key: 'email', pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern phone.', () => {
    let data = {
      phone: '13@ccl.op'
    }
    let rules = [{ key: 'phone', pattern: 'phone' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.phone[0]).to.eq('格式不正确')
  })
  it('required & pattern .', () => {
    let data = {
      email: ''
    }
    let rules = [{ key: 'email', required: true, pattern: 'email' }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.length).to.eq(1)
    expect(errors.email[0]).to.eq('必填')
  })
  it('pattern & minLength.', () => {
    let data = {
      password: '11a'
    }
    let rules = [{ key: 'password', pattern: /^\d+$/, minLength: 6 }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.password.length).to.eq(2)
  })
  it('pattern & maxLength.', () => {
    let data = {
      password: '1100000000000000'
    }
    let rules = [{ key: 'password', pattern: /^\d+$/, maxLength: 10 }]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.password.length).to.eq(1)
    expect(errors.password[0]).to.eq('长度不能大于10位')
  })
  it('throw error.', () => {
    let data = {
      password: '1100000'
    }
    let rules = [{ key: 'password', hasName: true }]
    let validator = new Validator()
    let fn = function() {
      validator.validate(data, rules)
    }
    expect(fn).to.throw()
  })
  it('自定义 实例的验证器', () => {
    let data = {
      orderId: 'a'
    }
    let rules = [{ key: 'orderId', required: true, hasNumber: true }]
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
    expect(errors.orderId[0]).to.eq('必须要有数字')
  })
  it('实例多次互不影响', () => {
    let data = {
      orderId: 'haha'
    }
    let rules = [{ key: 'orderId', required: true, hasNumber: true }]
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
    let data = {
      orderId: 'haha'
    }
    let rules = [{ key: 'orderId', required: true, hasNumber: true }]
    Validator.add('hasNumber', value => {
      if (!/\d/.test(value)) {
        return '必须要有数字'
      }
    })
    let validator1 = new Validator()
    let validator2 = new Validator()
    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.not.throw()
  })
})
