import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Table from '../../src/table/table'
import TableColumn from '../../src/table/tableColumn'

Vue.component('am-Table', Table)
Vue.component('am-table-column', TableColumn)

describe('Table', () => {
  it('存在.', () => {
    expect(Table).to.be.ok
  })
  xit('渲染一个table', () => {
    const wrapper = mount(Table, {
      propsData: {
        dataSource: [
          {
            id: 1,
            name: '李三',
            class: '十二班',
            weigth: '130',
            height: '170cm'
          },
          {
            id: 2,
            name: '张三',
            class: '二班',
            weigth: '140',
            height: '180cm'
          }
        ]
      },
      slots: {
        default: `
          <am-table-column text="姓名" field="name" :width="200"></am-table-column>
          <am-table-column text="班级" field="class" :width="200"></am-table-column>
          <am-table-column text="体重" field="weigth" :width="200"></am-table-column>
          <am-table-column text="身高" field="height"></am-table-column>
        `
      }
    })
  })
})
