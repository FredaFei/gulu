<template>
  <div class="g-pager">
    <span class="g-pager-item" v-for="(page,index) in pages" :key="index"
    :class="{'active':currentPage===page}" @click="goPage(page)">{{page}}</span>
  </div>
</template>

<script>
function unique(arr) {
  let obj = {}
  arr.forEach(item => {
    obj[item] = true
  })
  return Object.keys(obj).map(a => parseInt(a, 10))
}
export default {
  name: 'guluPagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPage: {
      type: Number,
      required: true
    },
    hideOnSinglePage: {
      type: Boolean,
      default: true
    },
  },
  data() {
    let pages = unique([1, this.currentPage, 
      this.totalPage, 
      this.currentPage - 1, this.currentPage - 2, 
      this.currentPage + 1, this.currentPage + 2
    ].filter(a=>a>=1&&a<=this.totalPage)
    .sort((a,b)=>a-b))
    .reduce((prev,current,index,array)=>{
      prev.push(current)
      array[index+1]!==undefined && array[index+1] - array[index] > 1 && prev.push('...')
      return prev
    },[])
    return {
      pages
    }
  },
  methods: {
    goPage(n){
      if(n>=1&&n<=this.totalPage){
        this.$emit('update:currentPage',n)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.g-pager {
  $font-size: 14px;
  &-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: $border-radius;
    border: 1px solid $gray;
    padding: 0 4px;
    font-size: $font-size;
    text-align: center;
    color: $color;
    min-width: 28px;
    height: 28px;
    margin: 0 4px;
    cursor: pointer;
    user-select: none;
    &.active {
      border-color: $blue;
    }
  }
}
</style>
