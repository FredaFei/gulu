import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {mount, shallowMount} from '@vue/test-utils'
import Vue from 'vue'
import Table from '../../src/table/index'
import TableColumn from '../../src/table/tableColumn'

describe('Table', () => {
  it('存在.', () => {
    expect(Table).to.be.ok
  })
  describe('props', () => {
    it('可以设置 dataSource.', (done) => {
      const wrapper = mount(Table, {
        propsData: {
          dataSource: [
            {id: 1, name: '王小虎', age: 2, phone: '12345678919', address: '上海市普陀区金沙江路 1518 弄'},
            {id: 2, name: '李小', age: 10, phone: '12345678929', address: '上海市普陀区金沙江路 1518 弄'},
            {id: 3, name: '刘虎', age: 6, phone: '12345678939', address: '上海市普陀区金沙江路 1518 弄'},
            {id: 4, name: '高丽', age: 4, phone: '12345678949', address: '上海市普陀区金沙江路 1518 弄'},
            {id: 5, name: '王二', age: 14, phone: '12345678949', address: '上海市普陀区金沙江路 1518 弄'},
          ]
        },
        slots: {
          default: `
            <table-column text="姓名" field="name"></table-column>
            <table-column text="年龄" field="age"></table-column>
            <table-column text="手机" field="phone"></table-column>
            <table-column text="地址" field="address"></table-column>
          `
        }
      })
      console.log(wrapper.html());
      setTimeout(() => {
        console.log(wrapper.html());
        done()
      }, 30)
      // expect(el.attributes('href')).to.equal('#i-settings')
    })
  })
})
