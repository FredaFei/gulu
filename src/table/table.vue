<template>
  <div class="g-table-wrapper">
    <table>
      <thead>
        <th><td v-for="col in columns" :key="col.text">{{col.text}}</td></th>
      </thead>
      <tbody>
        <tr v-for="(data,index) in dataSource" :key="data.id">
          <td v-for="col in columns" :key="col.text">{{data[col.field]}}</td>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
