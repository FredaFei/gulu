<template>
    <div class="col-container" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border: 1px solid green;height:100px;">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gCol',
    props: {
        span: {
            type: [String, Number]
        },
        offset: {
            type: [String, Number]
        }
    },

}
</script>

<style lang="scss" scoped>
.col-container {
  height: 100%;
  width: 50%;
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
