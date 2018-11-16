<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'guluSlides',
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
  transition: all 1s ease;
}

.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%) scale(.5);
}
.slide-enter.reverse {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  opacity: 0;
  transform: translateX(100%) scale(.5);
}
</style>
