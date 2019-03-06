<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = val => {
  let valid = true;
  Object.keys(val).forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "amCol",
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, createClass } = this;
      return [
        ...createClass({ span, offset }),
        ...createClass(phone, "phone-"),
        ...createClass(ipad, "ipad-"),
        ...createClass(narrowPc, "narrow-pc-"),
        ...createClass(pc, "pc-")
      ];
    },
    colStyle() {
      let { gutter } = this;
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px"
        };
      }
    }
  },
  methods: {
    // str: pc-、ipad-...
    createClass(obj, str = "") {
      if (!obj) return [];
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100%;
  background: #ddd;
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  @media (max-width: 576px) {
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 577px) {
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
}
</style>
