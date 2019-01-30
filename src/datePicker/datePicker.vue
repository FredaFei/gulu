<template>
  <div class="g-date-picker-wrapper" ref="datePicker">
    <g-popover position="bottom" :container="popoverContainer" @open="onOpen">
      <g-input></g-input>
      <template slot="popover">
        <div class="g-date-picker-pop" @selectstart.prevent>
          <div class="g-date-picker-pop-nav">
            <g-icon name="double-left" @click="onClickPrevYear" :class="classes('prev-year')"></g-icon>
            <g-icon name="left" @click="onClickPrevMonth" :class="classes('prev-month')"></g-icon>
            <div @click="onClickMonth">
              <span :class="classes('current-year')">2018年</span>
              <span :class="classes('current-month')">10月</span>
            </div>
            <g-icon name="double-right" @click="onClickNextYear" :class="classes('next-year')"></g-icon>
            <g-icon name="right" @click="onClickNextMonth" :class="classes('next-month')"></g-icon>
          </div>
          <div class="g-date-picker-pop-panes">
            <div class="g-date-picker-pop-content">
              <template v-if="mode==='month'">
                <div :class="classes('weeks')">
                  <span :class="classes('week')" v-for="n in weeksMap" :key="n">{{n}}</span>
                </div>
                <div :class="classes('row')" v-for="i in moment.range(1,7)" :key="i">
                  <span :class="[classes('col'),{'currentMonth': isCurrentMonth(getVisibleDate(i,j))}]" :key="j" v-for="j in moment.range(1,8)">{{visibleDate[(i-1)*7+j-1].getDate()}}</span>
                </div>
              </template>
              <template v-else>
                <div :class="classes('select-month')">
                  safdsfdsfdsfds
                </div>
              </template>
            </div>
          </div>
          <div class="g-date-picker-pop-actions">
            <button>确定</button>
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GPopover from "../popover/popover";
import GIcon from "../icon";
import GInput from "../input/input";
import moment from "./moment";
export default {
  name: "guluDatePicker",
  components: {
    GPopover,
    GIcon,
    GInput
  },
  props: {
    value: {
      type: Date
    }
  },
  data() {
    let [year, month] = moment.getYearMonthDate(this.value || new Date());
    return {
      mode: "month",
      weeksMap: ["日", "一", "二", "三", "四", "五", "六"],
      moment,
      display: { year, month },
      popoverContainer: null
    };
  },
  mounted() {
    this.popoverContainer = this.$refs.datePicker;
  },
  computed: {
    visibleDate() {
      let date = new Date();
      let firstDay = moment.firstDayOfMonth(date);
      let lastDay = moment.lastDayOfMonth(date);
      let [year, month, day] = moment.getYearMonthDate(date);
      let arr1 = [];
      for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
        arr1.push(new Date(year, month, i));
      }
      let arr2 = [];
      let prevDay = firstDay.getDay();
      for (let i = 0; i < prevDay; i++) {
        arr2.push(new Date(year, month, -i));
      }
      arr2.reverse();
      let arr3 = [];
      let nextDay = lastDay.getDay();
      let x = 42 - (arr1.length + arr2.length);
      for (let i = 1; i <= x; i++) {
        arr3.push(new Date(year, month + 1, i));
      }
      return [...arr2, ...arr1, ...arr3];
    }
  },
  methods: {
    getVisibleDate(row, col) {
      return this.visibleDate[(row - 1) * 7 + col - 1];
    },
    isCurrentMonth(date) {
      let [year1, month1] = moment.getYearMonthDate(date);
      console.log(year1, month1);
      return year1 === this.display.year && month1 === this.display.month;
    },
    onClickMonth() {
      if (this.mode === "month") {
        this.mode = "day";
      } else {
        this.mode = "month";
      }
    },
    onClickPrevYear() {},
    onClickPrevMonth() {},
    onClickNextYear() {},
    onClickNextMonth() {},
    onOpen() {
      this.mode = "month";
    },
    classes(name) {
      return `g-date-picker-pop-${name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.g-date-picker-pop {
  &-nav {
    position: relative;
    line-height: 32px;
    text-align: center;
    margin-bottom: 6px;
  }
  &-prev-month,
  &-next-month,
  &-prev-year,
  &-next-year {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &-prev-month {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &-next-month {
    right: 10px;
  }
  &-prev-year {
    left: -10px;
  }
  &-next-year {
    right: -10px;
  }
  &-current-year,
  &-current-month {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  &-current-month {
    margin-left: 6px;
  }
  &-weeks,
  &-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  &-weeks {
    border-bottom: 1px solid $gray;
  }
  &-week,
  &-col {
    width: 36px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
  &-col {
    color: #999;
    &.currentMonth {
      color: #333;
    }
  }
  &-select-month {
    width: 250px;
    height: 211px;
  }
}
</style>
