<template>
  <transition name="slide">
    <aside class="sider" v-if="visible">
      <slot></slot>
      <button class="close" v-if="visibleCloseBtn" @click="visible=false">close</button>
    </aside>
  </transition>
</template>

<script>
export default {
  name: "amAside",
  props: {
    visibleCloseBtn: false
  },
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > .close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
</style>
