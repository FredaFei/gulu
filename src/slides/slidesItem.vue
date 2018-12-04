<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'guluSlideItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
    }
  },
  computed: {
    visible() {
      return this.selected === this.name
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides-item {}

.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: all .2s ease;
}

.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>
