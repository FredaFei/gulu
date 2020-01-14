<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-table :data-source="tableData" v-bind="$attrs">
        <am-table-column text="姓名" field="name" ></am-table-column>
        <am-table-column text="年龄" field="age" ></am-table-column>
        <am-table-column text="手机" field="phone" ></am-table-column>
        <am-table-column text="地址" field="address" ></am-table-column>
<!--      <template v-for="(column,index) in columns">-->
<!--        <am-table-column v-bind="column.attrs || {}" :key="index"></am-table-column>-->
<!--      </template>-->
    </am-table>
  </div>
</template>
<script>
  import AmTable from "../../../src/table/table";
  import AmTableColumn from "../../../src/table/tableColumn";

  export default {
    components: {
      AmTable, AmTableColumn
    },
    data() {
      return {
        columns: [
          {attr: {text: '姓名', field: 'name', width: '80'}},
          {attr: {text: '年龄', field: 'age'}},
          {attr: {text: '手机', field: 'phone'}},
          {attr: {text: '地址', field: 'address'}},
        ],
        tableData: [
          {id: 1, name: '王小虎', age: 2, phone: '12345678919', address: '上海市普陀区金沙江路 1518 弄'},
          {id: 2, name: '李小', age: 10, phone: '12345678929', address: '上海市普陀区金沙江路 1518 弄'},
          {id: 3, name: '刘虎', age: 6, phone: '12345678939', address: '上海市普陀区金沙江路 1518 弄'},
          {id: 4, name: '高丽', age: 4, phone: '12345678949', address: '上海市普陀区金沙江路 1518 弄'},
        ],
      }
    }
  };
</script>
