<template>
  <div id="demo">
    <h1>实例一</h1>
    <g-table :data-source="dataSource" :border="true" expend-field="description" checkable :selected-items.sync="selectedItems" :loading="loading" :order-by.sync="orderBy" @update:orderBy="xx" :height="400">
      <g-table-column text="姓名" field="name" :width="200">
        <template slot-scope="props">
          <a :href="`/user/${props.value}`">{{props.value}}</a>
        </template>
      </g-table-column>
      <g-table-column text="班级" field="class" :width="200"></g-table-column>
      <g-table-column text="体重" field="weigth">
        <template slot-scope="props">
          <h1>{{props.value}}</h1>
        </template>
      </g-table-column>
      <template slot-scope="slotProps">
        <button @click="onEdit(slotProps.data)">编辑</button>
        <button @click="onRemove(slotProps.data)">删除</button>
      </template>
    </g-table>
  </div>
</template>

<script>
import Vue from "vue";
import Table from "./table/table";
import TableColumn from "./table/tableColumn";
Vue.component("g-table", Table);
Vue.component("g-table-column", TableColumn);

export default {
  data() {
    return {
      selectedItems: [],
      // columns: [
      //   {
      //     text: "姓名",
      //     field: "name",
      //     width: 200
      //   },
      //   {
      //     text: "班级",
      //     field: "class",
      //     width: 200
      //   },
      //   {
      //     text: "体重",
      //     field: "weigth",
      //     width: 200
      //   },
      //   {
      //     text: "身高",
      //     field: "height"
      //   }
      // ],
      dataSource: [
        {
          id: 1,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 2,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 3,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 4,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 5,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 6,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 7,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 8,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 9,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 10,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 11,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 12,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 13,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 14,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        }
      ],
      dataSource1: [
        {
          id: 1000,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 2000,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        }
      ],
      dataSource2: [
        {
          id: 30000,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 40000,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm"
        }
      ],
      height: 50,
      loading: false,
      orderBy: {
        weigth: "desc",
        height: "asc"
      }
    };
  },
  methods: {
    onEdit(item){
      alert(item.id)
    },
    onRemove(item){
      console.log(item)
    },
    xx() {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.weigth < b.weigth);
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
}

#demo {
  padding: 20px;
}
</style>
