<template>
  <div class="g-sub-nav">
    <span class="g-sub-nav-title" @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gulusubNav',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onClick() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.g-sub-nav {
  position: relative;
  &-title {
    padding: 10px 20px;
    display: block;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    min-width: 8em;
    font-size: $font-size;
    color: $light-color;
    white-space: nowrap;
    box-shadow: 0 0 3px rgba(0,0,0,.4);
    border-radius: $border-radius;
    background: white;
  }
}

.g-sub-nav .g-sub-nav{
  .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
