<template>
  <div class="g-table-wrapper">
    <table class="g-table" :class="{border,striped,compact}">
      <thead>
        <tr>
          <th><input type="checkbox" @click="onChangeAllItems" :checked="areAllCheckedItems" ref="allChecked" /></th>
          <th v-if="numberVisiable">#</th>
          <th v-for="col in columns" :key="col.field">
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
        <tr v-for="(data,index) in dataSource" :key="data.id">
          <td><input type="checkbox" :checked="inSelectedItems(data)" @click="onChangeItem(data,$event)" /></td>
          <td v-if="numberVisiable">{{index+1}}</td>
          <template v-for="col in columns">
            <td :key="col.field">{{data[col.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
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
    orderBy: {
      type: Object,
      default: () => ({})
      // validator(object) {
      //   object.keys();
      // }
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
    }
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
        fill: red;
      }
      &:first-child {
        bottom: -2px;
      }
      &:nth-child(2) {
        top: -2px;
      }
    }
  }
}
</style>
