<template>
  <div class="am-table-wrapper">
    <div class="am-table-content" :style="{height}" ref="tableContent">
      <table class="am-table" :class="{border,striped,compact}" ref="gTable">
        <thead>
          <tr>
            <th class="am-table-expend-field am-table-center" v-if="expendField"></th>
            <th class="am-table-checkbox" v-if="checkable"><input type="checkbox" @click="onChangeAllItems" :checked="areAllCheckedItems" ref="allChecked" /></th>
            <th v-if="numberVisiable" class="am-table-number">#</th>
            <th v-for="col in columns" :key="col.field" :style="{width:col.width+ 'px'}">
              <div class="am-table-head">{{col.text}}
                <span class="am-table-sorter" v-if="orderBy[col.field]" @click="onChangeOrderBy(col.field)">
                  <am-icon name="asc" :class="{active: orderBy[col.field]==='asc'}"></am-icon>
                  <am-icon name="desc" :class="{active: orderBy[col.field]==='desc'}"></am-icon>
                </span>
              </div>
            </th>
            <th v-if="$scopedSlots.default" ref="actionsHead"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(data,index) in dataSource">
            <tr :key="data.id">
              <td class="am-table-expend-field am-table-center" v-if="expendField">
                <am-icon class="am-table-expend-icon" :class="{'active': inExpendIds(data.id)}" name="right" @click="expendItem(data.id)"></am-icon>
              </td>
              <td class="am-table-checkbox" v-if="checkable"><input type="checkbox" :checked="inSelectedItems(data)" @click="onChangeItem(data,$event)" /></td>
              <td v-if="numberVisiable" class="am-table-number">{{index+1}}</td>
              <template v-for="col in columns">
                <td :key="col.field" :style="{width:col.width+'px'}">
                  <template v-if="col.render">
                    <vnodes :vnodes="col.render({value: data[col.field]})"></vnodes>
                  </template>
                  <template v-else>
                    {{data[col.field]}}
                  </template>
                </td>
              </template>
              <td v-if="$scopedSlots.default">
                <div ref="actions" style="display: inline-block;">
                  <slot :data="data"></slot>
                </div>
              </td>
            </tr>
            <transition name="slide-fade" :key="`${data.id}-expendFiled`">
              <tr :key="`${data.id}-expendFiled`" class="am-table-expend-filed" v-if="inExpendIds(data.id)">
                <td class="am-table-expend-field am-table-center"></td>
                <td :colspan="`${columns.length+expendedCellColSpan}`">
                  <p>{{data.description || '空'}}</p>
                </td>
              </tr>
            </transition>
          </template>
        </tbody>
      </table>
    </div>
    <div class="am-table-loading" v-if="loading">
      <am-icon name="loading"></am-icon>
    </div>
  </div>
</template>

<script>
import AmIcon from "../icon";
export default {
  name: "amTable",
  components: {
    AmIcon,
    vnodes: {
      functional: true,
      render: (h, context) => context.props.vnodes
    }
  },
  props: {
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
      expendIds: [],
      columns: []
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
    this.createColumns();
    this.doFixedHeader();
    this.doResponseCells();
  },
  beforeDestroy() {
    this.newTable.remove();
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
    createColumns() {
      this.columns = this.$slots.default.map(node => {
        let { text, field, width } = node.componentOptions.propsData;
        let render = node.data.scopedSlots && node.data.scopedSlots.default;
        return { text, field, width, render };
      });
    },
    doResponseCells() {
      if (this.$scopedSlots.default) {
        let node = this.$refs.actions[0];
        let { width } = node.getBoundingClientRect();
        let parentNode = node.parentNode;
        let styles = getComputedStyle(parentNode);
        let paddingLeft = styles.getPropertyValue("paddinam-left");
        let paddingRight = styles.getPropertyValue("paddinam-right");
        let borderLeft = styles.getPropertyValue("border-left-width");
        let borderRight = styles.getPropertyValue("border-right-width");
        let width2 =
          width +
          parseInt(paddingLeft) +
          parseInt(paddingRight) +
          parseInt(borderLeft) +
          parseInt(borderRight);
        this.$refs.actionsHead.style.width = `${width2}px`;
        this.$refs.actions.map(node => {
          node.parentNode.style.width = `${width2}px`;
        });
      }
    },
    doFixedHeader() {
      let newTable = this.$refs.gTable.cloneNode(false);
      this.newTable = newTable;
      newTable.classList.add("am-table-copy");
      let tHeader = this.$refs.gTable.children[0];
      this.$nextTick(() => {
        let { height } = tHeader.getBoundingClientRect();
        this.$refs.tableContent.style.marginTop = `${height}px`;
        this.$refs.tableContent.style.height = this.height - height + "px";
        newTable.appendChild(tHeader);
        this.$refs.tableContent.appendChild(newTable);
      });
    },
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

.am-table {
  $gray: darken($gray, 10%);
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $gray;
  th,
  td {
    text-align: left;
    padding: 8px;
  }
  &.border {
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
