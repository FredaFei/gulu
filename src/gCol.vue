<template>
    <div class="col-container" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]"
    :style="colStyle">
        <div style="border: 1px solid green;height:100px;">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guluCol',
    props: {
        span: {
            type: [String, Number]
        },
        offset: {
            type: [String, Number]
        }
    },
    computed: {
        colStyle() {
            let { gutter } = this
            return {
                paddingLeft: gutter / 2 + 'px',
                paddingRight: gutter / 2 + 'px'
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.col-container {
  height: 100%;
  border: 1px solid red;
  background: gray;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
