export default function validate(data, rules) {
  let errors = {}
  rules.forEach(ruleItem => {
    if (ruleItem.required) {
      if (!data[ruleItem.key]) {
        errors[ruleItem.key] = { required: '邮箱不能为空' }
        return
      }
    }
    if (ruleItem.pattern && ruleItem.pattern) {
      if (!ruleItem.pattern.test(data[ruleItem.key])) {
        errors[ruleItem.key] = { pattern: '格式不正确' }
      }
    }
    if (ruleItem.minLength && ruleItem.minLength) {
      if (data[ruleItem.key].length < ruleItem.minLength) {
        errors[ruleItem.key] = { minLength: '密码长度不能小于6' }
      }
    }
  })
  console.log(errors)
}

// var data = {
//   email: '1.2@11.cn',
//   password: '123'
// }
// var rules = [
//   { key: 'email', required: true, pattern: /^.+@.+$/ },
//   { key: 'password', pattern: '', minLength: 6 }
// ]
// validate(data, rules)
// {
//   email: {required:'邮箱不能为空', pattern: '格式不正确'},
//   password: {minLength:'密码长度不能小于6', pattern: '格式不正确'}
// }
