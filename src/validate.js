export default function validate(data, rules) {
  let errors = {}
  rules.forEach(ruleItem => {
    let value = data[ruleItem.key]
    if (ruleItem.required) {
      if (!value && value !== 0) {
        errors[ruleItem.key] = { required: '必填' }
        return
      }
    }
    if (ruleItem.pattern) {
      if (ruleItem.pattern === 'email') {
        ruleItem.pattern = /^.+@.+$/
      }
      if (ruleItem.pattern.test(value) === false) {
        ensureObject(errors, ruleItem.key)
        errors[ruleItem.key].pattern = '格式不正确'
      }
    }
    if (ruleItem.minLength) {
      if (data[ruleItem.key].length < ruleItem.minLength) {
        ensureObject(errors, ruleItem.key)
        errors[ruleItem.key].minLength = '密码长度不能小于6'
      }
    }
  })
  return errors
}


function ensureObject(obj, key) {
  if (Object.prototype.toString.call(obj[key]) !== '[object Object]') {
    obj[key] = {}
  }
}
