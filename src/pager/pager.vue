<template>
  <div class="g-pager">
    currentPage：{{currentPage}} totalPage：{{totalPage}}
  </div>
</template>

<script>
export default {
  name: 'guluPagination',
  props:{
    currentPage: {
      type:Number,
      required: true
    },
    totalPage: {
      type:Number,
      required: true
    },
    hideOnSinglePage: {
      type:Boolean,
      default: true
    },
  }
}
</script>

<style>

</style>
