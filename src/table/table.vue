<template>
  <div class="g-table-wrapper">
    <div class="g-table-content" :style="{height}" ref="tableContent">
      <table class="g-table" :class="{border,striped,compact}" ref="gTable">
        <thead>
          <tr>
            <th class="g-table-expend-field g-table-center" v-if="expendField"></th>
            <th class="g-table-checkbox" v-if="checkable"><input type="checkbox" @click="onChangeAllItems" :checked="areAllCheckedItems" ref="allChecked" /></th>
            <th v-if="numberVisiable" class="g-table-number">#</th>
            <th v-for="col in columns" :key="col.field" :width="col.width">
              <div class="g-table-head">{{col.text}}
                <span class="g-table-sorter" v-if="orderBy[col.field]" @click="onChangeOrderBy(col.field)">
                  <g-icon name="asc" :class="{active: orderBy[col.field]==='asc'}"></g-icon>
                  <g-icon name="desc" :class="{active: orderBy[col.field]==='desc'}"></g-icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(data,index) in dataSource">
            <tr :key="data.id">
              <td class="g-table-expend-field g-table-center" v-if="expendField">
                <g-icon class="g-table-expend-icon" :class="{'active': inExpendIds(data.id)}" name="right" @click="expendItem(data.id)"></g-icon>
              </td>
              <td class="g-table-checkbox" v-if="checkable"><input type="checkbox" :checked="inSelectedItems(data)" @click="onChangeItem(data,$event)" /></td>
              <td v-if="numberVisiable" class="g-table-number">{{index+1}}</td>
              <template v-for="col in columns">
                <td :key="col.field" :width="col.width">{{data[col.field]}}</td>
              </template>
            </tr>
            <transition name="slide-fade" :key="`${data.id}-expendFiled`">
              <tr :key="`${data.id}-expendFiled`" class="g-table-expend-filed" v-if="inExpendIds(data.id)">
                <td class="g-table-expend-field g-table-center"></td>
                <td :colspan="`${columns.length+expendedCellColSpan}`">
                  <p>{{data.description || '空'}}</p>
                </td>
              </tr>
            </transition>
          </template>

        </tbody>
      </table>
    </div>
    <div class="g-table-loading" v-if="loading">
      <g-icon name="loading"></g-icon>
    </div>
  </div>
</template>

<script>
import GIcon from "../icon";
export default {
  name: "guluTable",
  components: { GIcon },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => [],
      validator(array) {
        return array.every(i => i.id !== undefined);
      }
    },
    height: {
      type: Number
    },
    expendField: {
      type: String
    },
    orderBy: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    numberVisiable: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newTable: {},
      expendIds: []
    };
  },
  computed: {
    areAllCheckedItems() {
      let a = this.selectedItems.map(i => i.id).sort();
      let b = this.dataSource.map(i => i.id).sort();
      if (a.length !== b.length) {
        return false;
      }
      let equal = true;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    },
    expendedCellColSpan() {
      let count = 1;
      if (this.checkable) {
        count += 1;
      }
      if (this.expendField) {
        count += 1;
      }
      return count;
    }
  },
  mounted() {
    let newTable = this.$refs.gTable.cloneNode(false);
    this.newTable = newTable;
    newTable.classList.add("g-table-copy");
    let tHeader = this.$refs.gTable.children[0];
    let { height } = tHeader.getBoundingClientRect();
    this.$refs.tableContent.style.marginTop = `${height}px`;
    this.$refs.tableContent.style.height = this.height - height + "px";
    newTable.appendChild(tHeader);
    this.$refs.tableContent.appendChild(newTable);
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    }
  },
  methods: {
    expendItem(id) {
      if (this.inExpendIds(id)) {
        this.expendIds.splice(this.expendIds.indexOf(id), 1);
      } else {
        this.expendIds.push(id);
      }
    },
    inExpendIds(id) {
      return this.expendIds.includes(id);
    },
    inSelectedItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0
        ? true
        : false;
    },
    onChangeItem(item, e) {
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        copy = copy.filter(i => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy);
    },
    onChangeAllItems(e) {
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.dataSource));
      if (selected) {
        this.$emit("update:selectedItems", copy);
      } else {
        this.$emit("update:selectedItems", []);
      }
    },
    onChangeOrderBy(key) {
      let oldSort = this.orderBy[key];
      let copy = JSON.parse(JSON.stringify(this.orderBy));
      if (oldSort === "asc") {
        copy[key] = "desc";
      } else if (oldSort === "desc") {
        copy[key] = true;
      } else {
        copy[key] = "asc";
      }
      this.$emit("update:orderBy", copy);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
::-webkit-scrollbar {
  display: none;
  width: 0px;
  height: 0px;
}
.g-table {
  $gray: darken($gray, 10%);
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid $gray;
  }
  &.border {
    border: 1px solid $gray;
    th,
    td {
      border: 1px solid $gray;
    }
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten($gray, 10%);
        }
      }
    }
  }
  &.compact {
    th,
    td {
      padding: 4px;
    }
  }
  &-head {
    display: flex;
    align-items: center;
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    svg {
      fill: $gray;
      width: 16px;
      height: 16px;
      margin: 0 6px;
      position: relative;
      &.active {
        fill: $blue;
      }
      &:first-child {
        bottom: -2px;
      }
      &:nth-child(2) {
        top: -2px;
      }
    }
  }
  &-wrapper {
    position: relative;
    overflow: auto;
  }
  &-content {
    overflow: auto;
  }
  &-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
  &-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    svg {
      width: 50px;
      height: 50px;
      @include spin;
    }
  }
  & &-center {
    text-align: center;
  }
  &-expend-icon {
    transition: transform 0.25s;
    &.active {
      transform: rotate(90deg);
    }
  }
  &-checkbox,
  &-number {
    min-width: 60px;
    width: 60px;
  }
  &-expend-field {
    min-width: 40px;
    width: 40px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
