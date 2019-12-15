<template>
  <div class="am-controll-count">
    <button :class="['btn', {disabled: count<=1}]" @click="computedNum(-1)">-</button>
    <input type="text" v-model="count" readonly="readonly">
    <button :class="['btn', {disabled: count>=maxCount}]" @click="computedNum(1)">+</button>
  </div>
</template>
<script>
  export default {
    name: "controllNum",
    props: {
      count: {
        type: Number,
        default: 1
      },
      maxCount: {
        type: Number,
        default: 10
      }
    },
    methods: {
      computedNum(val) {
        if (val < 0 && this.count === 1) {
          return;
        }
        if (val > 0 && this.count >= this.maxCount) {
          return;
        }
        this.$emit('update:count',this.count + val);
      }
    }
  };
</script>
<style scoped lang="scss">
  @import "var";
  .am-controll-count {
    display: flex;
    align-items: center;
    width: 100%;
    input,
    .btn {
      text-align: center;
      line-height: 30px;
      color: #666;
      background: #ffffff;
      outline: none;
      box-sizing: border-box;
    }
    .btn {
      border: 1px solid #ebebeb;
      flex: 0 0 34px;
      width: 32px;
      font-size: 20px;
      cursor: pointer;
      &:nth-child(1) {
        border-radius: $border-radius 0 0 $border-radius;
      }
      &:nth-child(3) {
        border-radius: 0 $border-radius $border-radius 0;
      }
    }
    input {
      flex: 1;
      min-width: 34px;
      color: #333;
      font-size: 16px;
      border: none;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      border-radius: 0;
      -webkit-appearance: none;
    }
    .disabled {
      color:#aaa;
      background: #ebebeb;
    }
  }
</style>
