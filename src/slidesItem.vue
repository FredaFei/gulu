<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
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
      selected: undefined
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
  border: 10px solid blueviolet;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
