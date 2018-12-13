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
    let validators = Object.keys(ruleItem).filter(key=>key!=='key'&&key!=='required')
    validators.forEach(validator=>{
      if(validator){
        let errorText = validate[validator](value, ruleItem[validator])
        if(errorText){
          ensureObject(errors, ruleItem.key)
          errors[ruleItem.key][validator] = errorText
        }
      }
    })
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
    return `密码长度不能小于${minLength}`
  }
}

validate.maxLength = (value, maxLength) => {
  if (value.length < maxLength) {
    return `密码长度不能大于${maxLength}`
  }
}

function ensureObject(obj, key) {
  if (Object.prototype.toString.call(obj[key]) !== '[object Object]') {
    obj[key] = {}
  }
}
