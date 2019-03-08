<template>
  <div class="cascader-wrapper" ref="cascaderWrapper">
    <div class="cascader" @click="toggle">
      {{ result }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <am-cascader-item :source-items="source" :selected="selected" :loading-item="loadingItem" @update:selected="onUpdateSelected" :load-data="loadData" :height="popoverHeight"></am-cascader-item>
    </div>
  </div>
</template>

<script>
import AmCascaderItem from "./cascaderItem";
export default {
  name: "amCascader",
  components: { AmCascaderItem },
  props: {
    source: {
      type: Array,
      required: true,
      default: []
    },
    selected: {
      type: Array,
      default: () => []
    },
    popoverHeight: {
      type: String
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      popoverVisible: false,
      loadingItem: {}
    };
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join("/");
    }
  },
  methods: {
    onClickDocument(e) {
      let { cascaderWrapper } = this.$refs;
      if (cascaderWrapper === e.target || cascaderWrapper.contains(e.target)) {
        return;
      }
      this.close();
    },
    open() {
      this.popoverVisible = true;
      this.$nextTick(() => {
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.popoverVisible = false;
      this.$nextTick(() => {
        document.removeEventListener("click", this.onClickDocument);
      });
    },
    toggle() {
      if (this.popoverVisible === true) {
        this.close();
      } else {
        this.open();
      }
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
      let lastItem = newSelected[newSelected.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };
      let complex = (children, id) => {
        let hasChildrem = [];
        let noChildrem = [];
        children.forEach(item => {
          if (item.children) {
            hasChildrem.push(item);
          } else {
            noChildrem.push(item);
          }
        });
        let found = simplest(noChildrem, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildrem, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildrem.length; i++) {
              found = complex(hasChildrem[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      let updateSource = result => {
        this.loadingItem = {};
        // 找到原来的id，添加children属性
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        this.$emit("update:source", copy);
      };
      if (this.loadData && !lastItem.isLeaf) {
        this.loadData(lastItem, updateSource);
        this.loadingItem = lastItem;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/_var";
.cascader-wrapper {
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  .cascader {
    height: 30px;
    line-height: 30px;
    padding: 0 1em;
    margin-bottom: 6px;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    background: #fff;
    z-index: 1;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
