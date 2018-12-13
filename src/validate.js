export default function validate(data, rules) {
  let errors = {}
  rules.forEach(ruleItem => {
    let value = data[ruleItem.key]
    if (ruleItem.required) {
      let errorText = validate.required(value)
      if(errorText){
        ensureObject(errors, ruleItem.key)
        errors[ruleItem.key].required = errorText
        return
      }
    }
    if (ruleItem.pattern) {
      let errorText = validate.pattern(value, ruleItem.pattern)
      if(errorText){
        ensureObject(errors, ruleItem.key)
        errors[ruleItem.key].pattern = errorText
      }
    }
    if (ruleItem.minLength) {
      let errorText = validate.minLength(value, ruleItem.minLength)
      if(errorText){
        ensureObject(errors, ruleItem.key)
        errors[ruleItem.key].minLength = errorText
      }
    }
  })
  return errors
}
validate.required = value => {
  if (!value && value !== 0) {
    return '必填'
  }
}
validate.pattern = (value, pattern) => {
  if (pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if (pattern.test(value) === false) {
    return '格式不正确'
  }
}
validate.minLength = (value, minLength) => {
  if (value.length < minLength) {
    return '密码长度不能小于6'
  }
}

function ensureObject(obj, key) {
  if (Object.prototype.toString.call(obj[key]) !== '[object Object]') {
    obj[key] = {}
  }
}
