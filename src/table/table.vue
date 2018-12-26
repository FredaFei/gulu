<template>
  <div class="g-table-wrapper">
    <table class="g-table" :class="{border,striped,compact}">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th v-if="numberVisiable">#</th>
          <th v-for="col in columns" :key="col.text">{{col.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data,index) in dataSource" :key="data.id">
          <td><input type="checkbox" /></td>
          <td v-if="numberVisiable">{{index+1}}</td>
          <template v-for="col in columns">
            <td>{{data[col.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'guluTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
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
  }
}
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
      >tr {
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
}
</style>
