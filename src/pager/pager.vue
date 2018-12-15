<template>
  <div class="g-pager">
    <span class="g-pager-item prev" @click="goPage(currentPage-1)" :class="{disabled:currentPage===1}">
      <g-icon name="left"></g-icon>
    </span>
    <template v-for="(page,index) in pages">
      <template v-if="page===currentPage">
        <span class="g-pager-item active" @click="goPage(page)">{{page}}</span>
      </template>
      <template v-else-if="page==='...'">
        <span class="g-pager-item separator">
          <g-icon name="ellipsis"></g-icon>
        </span>
      </template>
      <template v-else>
        <span class="g-pager-item" @click="goPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="g-pager-item next" @click="goPage(currentPage+1)" :class="{disabled:currentPage===totalPage}">
      <g-icon name="right"></g-icon>
    </span>
  </div>
</template>

<script>
import GIcon from '../icon'
function unique(arr) {
  let obj = {}
  arr.forEach(item => {
    obj[item] = true
  })
  return Object.keys(obj).map(a => parseInt(a, 10))
}
export default {
  name: 'guluPagination',
  components: { GIcon },
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
  computed: {
    pages(){
      return unique([1, this.currentPage, 
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
  $width: 28px;
  $height: 28px;
  display: flex; justify-content: flex-start; align-items: center;
  &-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
    font-size: $font-size;
    text-align: center;
    color: $color;
    min-width: $width;
    height: $height;
    margin: 0 4px;
    border-radius: $border-radius;
    border: 1px solid $gray;
    cursor: pointer;
    user-select: none;
    transition: all .25s;
    &.separator {border: none;}
    &.active,&:hover {
      border-color: $blue;
    }
    &.disabled{
      cursor: not-allowed;
      svg { fill: darken($gray, 30%); }
    }
  }
}
</style>
