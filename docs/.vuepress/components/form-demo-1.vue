<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
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
  </div>
</template>
<script>
import {  AmCol,
  AmRow,
  AmButton,
  AmInput,
  AmRadio,
  AmCheckbox,
  AmDatePicker,
  AmSelect,
  AmOption, Validator} from "../../../src/index";



const validator = new Validator()
validator.maxBirthday = value => {
  if (new Date() - value < 0) {
    return '出生日期最大为今天'
  }
}
export default {
  components: {
    AmCol,
    AmRow,
    AmButton,
    AmInput,
    AmRadio,
    AmCheckbox,
    AmDatePicker,
    AmSelect,
    AmOption,
  },
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
        { value: "profession A", label: "Apple" },
        { value: "profession B", label: "Banana" },
        { value: "profession C", label: "Cherry" },
        { value: "profession G", label: "Grape" },
        { value: "profession P", label: "Peach" }
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
        { key: 'name', required: true, minLength: 3, maxLength: 8 },
        { key: 'birthday', required: true, maxBirthday: true },
        { key: 'gender', required: true },
        { key: 'hobby', required: true },
        { key: 'phone', required: true, pattern: 'phone' },
        { key: 'profession', required: true },
        { key: 'other', required: true }
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
</script>
<style scoped>
.am-row + .am-row {
  margin-top: 20px;
}
form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.label {
  text-align: right;
  margin-right: 20px;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
