---
title: 'Table 表单'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
<table-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
<div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-table :data-source="tableData1">
      <template v-for="(column,index) in columns1">
        <am-table-column :text="column.text" :field="column.field" :width="column.width" :key="column.field"></am-table-column>
      </template>
    </am-table>
    <p><strong>多选 & 排序</strong></p>
    <am-table :data-source="tableData1" checkable :selected-items.sync="selectedItems" @update:selectedItems="onSeletedItems" :loading="loading" :order-by.sync="orderBy" @update:orderBy="onSort">
      <template v-for="(column,index) in columns2">
        <am-table-column :text="column.text" :field="column.field" :width="column.width" :key="column.field"></am-table-column>
      </template>
    </am-table>
    <p><strong>自定义列模板 & 展开行</strong></p>
    <am-table :data-source="tableData2" expand-field="description">
      <am-table-column text="姓名" field="name" width="12%">
        <template slot-scope="props">
          <a :href="`/user/${props.value}`">{{props.value}}</a>
        </template>
      </am-table-column>
      <am-table-column text="班级" field="class" width="18%"></am-table-column>
      <am-table-column text="身高" field="height" width="14%"></am-table-column>
      <am-table-column text="体重" field="weigth" width="18%">
        <template slot-scope="props">
          <div>{{props.value}} kg</div>
        </template>
      </am-table-column>
      <am-table-column text="操作" field="operate">
        <template slot-scope="slotProps">
          <am-button @click="onEdit(slotProps.data)">Edit</am-button>
          <am-button @click="onRemove(slotProps.data)">Delete</am-button>
        </template>
      </am-table-column>
    </am-table>
    <p><strong>固定表头</strong></p>
    <am-table :data-source="tableData2" :height="250">
      <am-table-column text="姓名" field="name" width="12%">
        <template slot-scope="props">
          <a :href="`/user/${props.value}`">{{props.value}}</a>
        </template>
      </am-table-column>
      <am-table-column text="班级" field="class" width="18%"></am-table-column>
      <am-table-column text="身高" field="height" width="14%"></am-table-column>
      <am-table-column text="体重" field="weigth" width="18%">
        <template slot-scope="props">
          <div>{{props.value}} kg</div>
        </template>
      </am-table-column>
      <am-table-column text="操作" field="operate">
        <template slot-scope="slotProps">
          <am-button @click="onEdit(slotProps.data)">Edit</am-button>
          <am-button @click="onRemove(slotProps.data)">Delete</am-button>
        </template>
      </am-table-column>
    </am-table>
  </div>
</template>
```

```js{4}
  export default {
    data() {
      return {
        columns1: [
          { text: '姓名', field: 'name', width: '18%' },
          { text: '年龄', field: 'age', width: '10%' },
          { text: '手机', field: 'phone', width: '20%' },
          { text: '地址', field: 'address' }
        ],
        columns2: [
          { text: '姓名', field: 'name', width: '12%' },
          { text: '年龄', field: 'age', width: '12%' },
          { text: '手机', field: 'phone', width: '20%' },
          { text: '地址', field: 'address' }
        ],
        selectedItems: [],
        tableData1: [
          { id: 1, name: '王小虎', age: 2, phone: '12345678919', address: '上海市普陀区金沙江路 1518 弄' },
          { id: 2, name: '李小', age: 10, phone: '12345678929', address: '上海市普陀区金沙江路 1518 弄' },
          { id: 3, name: '刘虎', age: 6, phone: '12345678939', address: '上海市普陀区金沙江路 1518 弄' },
          { id: 4, name: '高丽', age: 4, phone: '12345678949', address: '上海市普陀区金沙江路 1518 弄' },
          { id: 5, name: '王二', age: 14, phone: '12345678949', address: '上海市普陀区金沙江路 1518 弄' },
        ],
        tableData2: [
          { id: 1, name: "李三", class: "十二班", weigth: "130", height: "170cm" },
          { id: 2, name: "周五", class: "二班", weigth: "140", height: "182cm", description: "这里是说明备注哦~" },
          { id: 3, name: "王二", class: "一班", weigth: "160", height: "172cm", description: "这里是说明备注哦~" },
          { id: 4, name: "赵四", class: "九班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 5, name: "董卓", class: "三班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 6, name: "孙权", class: "六班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 7, name: "王贵", class: "四班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 8, name: "刘备", class: "七班", weigth: "110", height: "168cm" },
          { id: 9, name: "伍仟", class: "九班", weigth: "110", height: "168cm" },
          { id: 10, name: "吴琪", class: "九班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 12, name: "张一", class: "十五班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 13, name: "十三", class: "六班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
          { id: 14, name: "祝九", class: "十一班", weigth: "110", height: "168cm", description: "这里是说明备注哦~" },
        ],
        loading: false,
        orderBy: {
          age: true
        }
      }
    },
    methods: {
      onSeletedItems(items) {
        console.log(items)
      },
      onSort() {
        this.loading = true;
        const { age } = this.orderBy
        setTimeout(() => {
          this.tableData1 = age !== true ? this.tableData1.sort(this._sort) : this.tableData1
          this.loading = false;
        }, 500);
      },
      _sort(a, b) {
        const { age } = this.orderBy
        if (age === 'asc') { return a.age - b.age }
        if (age === 'desc') { return b.age - a.age }
      }
    },
  }
```

### Table.API

| 参数           |           说明           |    类型 | 默认值 | 可选值 |
| -------------- | :----------------------: | ------: | -----: | -----: |
| dataSource     |      显示的表格数据      |   Array |     —— |     —— |
| height         | 表格高度，默认为自动高度 |  Number |     —— |     —— |
| selectedItems  |       当前选中记录       |   Array |     —— |     —— |
| orderBy        |       设置排序规则       |  Object |     —— |     —— |
| loading        |      是否显示加载中      | Boolean |  false |   true |
| checkable      |     是否显示半选样式     | Boolean |  false |   true |
| numberVisiable |       是否展示行号       | Boolean |   true |  false |
| border         |      是否展示外边框      | Boolean |   true |  false |
| striped        |    是否为斑马纹 table    | Boolean |   true |  false |
| compact        |     表格大小是否紧凑     | Boolean |  false |   true |
| expandField    |      指定展开列属性      |  String |     —— |     —— |

### TableColumn.API

| 参数           |           说明           |    类型 | 默认值 | 可选值 |
| -------------- | :----------------------: | ------: | -----: | -----: |
| text     |      显示的标题      |   String |     —— |     —— |
| field         | 对应列内容的字段名 |  String |     —— |     —— |
| width  |       对应列的宽度       |   Number |     —— |     —— |

### Table.Events

| 事件名称             |             说明             |         回调参数 |
| -------------------- | :--------------------------: | ---------------: |
| update:selectedItems | 点击数据行的 Checkbox 时触发 |   当前选中行数据 |
| update:orderBy       |   点击排序条件指示器时触发   | 当前属性排序规则 |

::: tip

- 表格高度默认是自适应，当需要固定表头时，需设置 height
- 排序规则 orderBy 设置格式

    ```
    {[列表属性key]: 'desc' || 'asc'}
    ```
    考虑到手机端，多次点击时排序交互为升序-降序-无序(保持上次一排序)

+ 为了列与列之间更好的保持对齐，可手动设置每一列的宽度，最后一列可不设（自适应）
:::

::: warning

  表单组件暂未测试数据量大的情况，仅供参考，莫在生产环境中使用。
  
:::

