<template>
  <div id="demo">
    <h1>实例一</h1>
    <g-table :data-source="dataSource" :columns="columns" :border="true" :selected-items.sync="selectedItems" :loading="loading" :order-by.sync="orderBy" @update:orderBy="xx" height="400px"></g-table>
    <h1>实例二</h1>
    <g-table :data-source="dataSource" :columns="columns" :striped="false"></g-table>
    <h1>实例三</h1>
    <g-table :data-source="dataSource" :columns="columns" :border="true" :compact="true" :number-visiable="false"></g-table>
  </div>
</template>

<script>
import Vue from "vue";
import Table from "./table/table";
Vue.component("g-table", Table);

export default {
  data() {
    return {
      selectedItems: [],
      columns: [
        {
          text: "姓名",
          field: "name"
        },
        {
          text: "班级",
          field: "class"
        },
        {
          text: "体重",
          field: "weigth"
        },
        {
          text: "身高",
          field: "height"
        }
      ],
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
          height: "180cm"
        },
        {
          id: 3,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm"
        },
        {
          id: 4,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm"
        },
        {
          id: 5,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm"
        },
        {
          id: 6,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 7,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm"
        },
        {
          id: 8,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm"
        },
        {
          id: 9,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm"
        },
        {
          id: 10,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm"
        },
        {
          id: 11,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm"
        },
        {
          id: 12,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm"
        },
        {
          id: 13,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm"
        },
        {
          id: 14,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm"
        }
      ],
      loading: false,
      orderBy: {
        weigth: "desc",
        height: "asc"
      }
    };
  },
  methods: {
    xx() {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.weigth < b.weigth);
        this.loading = false;
      }, 3000);
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
::-webkit-scrollbar {
  display: none;
  width: 0px;
  height: 0px;
}
#demo {
  padding: 20px;
}
</style>
