<template>
  <div class="am-pager" :class="{hide:hideOnSinglePage===true &&totalPage<=1}">
    <span class="am-pager-item prev" @click="goPage(currentPage-1)" :class="{disabled:currentPage===1}">
      <am-icon name="left"></am-icon>
    </span>
    <template v-for="(page,index) in pages">
      <template v-if="page===currentPage">
        <span class="am-pager-item active" :data-current="page" @click="goPage(page)">{{page}}</span>
      </template>
      <template v-else-if="page==='...'">
        <span class="am-pager-item separator">
          <am-icon name="ellipsis"></am-icon>
        </span>
      </template>
      <template v-else>
        <span class="am-pager-item other" :data-page="page" @click="goPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="am-pager-item next" @click="goPage(currentPage+1)" :class="{disabled:currentPage===totalPage}">
      <am-icon name="right"></am-icon>
    </span>
  </div>
</template>

<script>
import AmIcon from "../icon";
function unique(arr) {
  let obj = {};
  arr.forEach(item => {
    obj[item] = true;
  });
  return Object.keys(obj).map(a => parseInt(a, 10));
}
export default {
  name: "amPagination",
  components: { AmIcon },
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
    }
  },
  computed: {
    pages() {
      return unique(
        [
          1,
          this.currentPage,
          this.totalPage,
          this.currentPage - 1,
          this.currentPage - 2,
          this.currentPage + 1,
          this.currentPage + 2
        ]
          .filter(a => a >= 1 && a <= this.totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev, current, index, array) => {
        prev.push(current);
        array[index + 1] !== undefined &&
          array[index + 1] - array[index] > 1 &&
          prev.push("...");
        return prev;
      }, []);
    }
  },
  methods: {
    goPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.am-pager {
  $font-size: 14px;
  $width: 22px;
  $height: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.hide {
    display: none;
  }
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
    border: 1px solid $border-color;
    cursor: pointer;
    user-select: none;
    transition: all 0.25s;
    &.separator {
      border: none;
    }
    &.active,
    &:hover {
      border-color: $blue;
    }
    &.disabled {
      border-color: darken($gray, 10%);
      cursor: not-allowed;
      &:hover {
        border-color: $gray;
      }
      svg {
        fill: darken($gray, 30%);
      }
    }
  }
}
</style>
