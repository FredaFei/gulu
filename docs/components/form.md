---
title: 'Form 表单'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <form-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <form @submit="onSumbit">
    <am-row>
      <am-col span="5">
        <div class="label">姓名</div>
      </am-col>
      <am-col span="8">
        <am-input v-model="form.name"></am-input>
        <span class="error">{{fieldError('name')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5">
        <div class="label">出生日期</div>
      </am-col>
      <am-col span="8">
        <am-date-picker v-model="form.birthday"></am-date-picker>
        <span class="error">{{fieldError('birthday')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5">
        <div class="label">性别</div>
      </am-col>
      <am-col span="8">
        <div>
          <am-radio v-model="form.gender" value="M">M</am-radio>
          <am-radio v-model="form.gender" value="F">F</am-radio>
        </div>
        <span class="error">{{fieldError('gender')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5">
        <div class="label">爱好</div>
      </am-col>
      <am-col span="10">
        <div>
          <am-checkbox v-model="form.hobby" :value="i" v-for="i in hobbies">{{i}}</am-checkbox>
        </div>
        <span class="error">{{fieldError('hobby')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5">
        <div class="label">职业</div>
      </am-col>
      <am-col span="8">
        <am-select :selected.sync="form.profession" clearable>
          <am-option v-for="o in profession" :key="o.value" :value="o.value">{{o.label}}</am-option>
        </am-select>
        <span class="error">{{fieldError('profession')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5">
        <div class="label">电话</div>
      </am-col>
      <am-col span="8">
        <am-input v-model="form.phone"></am-input>
        <span class="error">{{fieldError('phone')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5">
        <div class="label">其他</div>
      </am-col>
      <am-col span="8">
        <am-input v-model="form.other" type="textarea"></am-input>
        <span class="error">{{fieldError('other')}}</span>
      </am-col>
    </am-row>
    <am-row>
      <am-col span="5"></am-col>
      <am-col span="8">
        <am-button>提交</am-button>
      </am-col>
    </am-row>
  </form>
</template>
```

```js{4}
...
  const validator = new Validator()
  validator.maxBirthday = value => {
    if (new Date() - value < 0) {
      return '出生日期最大为今天'
    }
  }
  export default {
    data() {
      return {
        form: {
          name: '',
          birthday: '',
          gender: '',
          phone: '',
          hobby: [],
          profession: '',
          other: '',
        },
        errors: [],
        hobbies: [1, 2, 3, 4, 5],
        profession: [
          {value: "profession A", label: "Apple"},
          {value: "profession B", label: "Banana"},
          {value: "profession C", label: "Cherry"},
          {value: "profession G", label: "Grape"},
          {value: "profession P", label: "Peach"}
        ],
      };
    },
    methods: {
      fieldError(key) {
        return this.errors[key] && this.errors[key].join('，')
      },
      onSumbit(e) {
        e.preventDefault()
        const data = {}
        for (let k of Object.keys(this.form)) {
          if (Array.isArray(this.form[k])) {
            data[k] = this.form[k].join(',')
          } else {
            data[k] = this.form[k]
          }
        }
        const rules = [
          {key: 'name', required: true, minLength: 3, maxLength: 8},
          {key: 'birthday', required: true, maxBirthday: true},
          {key: 'gender', required: true},
          {key: 'hobby', required: true},
          {key: 'phone', required: true, pattern: 'phone'},
          {key: 'profession', required: true},
          {key: 'other', required: true}
        ]
        const errors = validator.validate(data, rules)
        if (!validator.isEmpty(errors)) {
          this.errors = errors;
          return false
        }
        console.log('success');
      }
    }
  };
...
```

### API

#### Validator 验证器

```js{4}
import Validator from '${path}/validate';
const data = {
  name: 'test',
  phone: 12121,
  ...
};
const rules = [
    {key: "name",required: true, minLength: 4,maxLength: 10},
    {key: "phone",required: true, pattern: 'phone'},
    ...
]
const validator = new Validator()
const errors = validator.validate(data, rules)
// errors ==> {name: [error...],phone: [error...]}
if (!validator.isEmpty(errors)) {
    // show errors
    return false
}
// validation passed

```

::: tip
validate 函数仅适用验证同步表单，异步表单验证暂不支持 。
:::