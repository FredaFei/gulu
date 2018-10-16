<template>
    <div class="row-container" :class="rowClass" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'gRow',
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator(val){
                return ['left','center','right'].includes(val)
            }
        }
    },
    computed: {
        rowStyle() {
            let { gutter } = this
            return {
                marginLeft: -gutter / 2 + 'px', 
                marginRight: -gutter / 2 + 'px'
            }
        },
        rowClass(){
            let {align} = this
            return [align && `align-${align}`]
        }
    }
}
</script>

<style lang="scss" scoped>
.row-container {
  display: flex;
  &.align-left{
      justify-content: flex-start;
  }
  &.align-center{
      justify-content: center;
  }
  &.align-right{
      justify-content: flex-end;
  }
}
</style>
