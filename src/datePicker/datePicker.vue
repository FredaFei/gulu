<template>
  <div class="g-date-picker-wrapper" ref="datePicker">
    <g-popover position="bottom" :container="popoverContainer" @open="onOpen">
      <g-input :value="formattedValue" type="text" @change="onChange" @input="onInput"></g-input>
      <template slot="popover">
        <div class="g-date-picker-pop" @selectstart.prevent>
          <div class="g-date-picker-pop-nav">
            <g-icon name="double-left" @click="onClickPrevYear" :class="classes('prev-year')"></g-icon>
            <g-icon name="left" @click="onClickPrevMonth" :class="classes('prev-month')"></g-icon>
            <div @click="onClickMonth">
              <span :class="classes('current-year')">{{display.year}}年</span>
              <span :class="classes('current-month')">{{display.month+1}}月</span>
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
                  <div :class="[classes('col'),{'currentMonth': isCurrentMonth(getVisibleDate(i,j)),
                  'selectedDay': isSelectedDay(getVisibleDate(i,j)),'today': isToday(getVisibleDate(i,j))}]" :key="j" v-for="j in moment.range(1,8)" @click="onSelectedDay(visibleDate[(i-1)*7+j-1])"><span>{{visibleDate[(i-1)*7+j-1].getDate()}}</span></div>
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
    let [year, month, day] = moment.getYearMonthDate(this.value || new Date());
    return {
      mode: "month",
      weeksMap: ["日", "一", "二", "三", "四", "五", "六"],
      moment,
      display: { year, month, day },
      popoverContainer: null
    };
  },
  mounted() {
    this.popoverContainer = this.$refs.datePicker;
  },
  computed: {
    visibleDate() {
      let date = this.value || new Date();
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
    },
    formattedValue() {
      if (!this.value) {
        return "";
      }
      let [year, month, day] = moment.getYearMonthDate(this.value);
      return `${year}-${month + 1}-${day}`;
    }
  },
  methods: {
    getVisibleDate(row, col) {
      return this.visibleDate[(row - 1) * 7 + col - 1];
    },
    isCurrentMonth(date) {
      let [year1, month1] = moment.getYearMonthDate(date);
      return year1 === this.display.year && month1 === this.display.month;
    },
    isSelectedDay(date) {
      let [year1, month1, day1] = moment.getYearMonthDate(date);
      return (
        year1 === this.display.year &&
        month1 === this.display.month &&
        day1 === this.display.day
      );
    },
    isToday(date) {
      let [year, month, day] = moment.getYearMonthDate(date);
      let [year1, month1, day1] = moment.getYearMonthDate(new Date());
      return year1 === year && month1 === month && day1 === day;
    },
    onChange() {},
    onInput() {},
    onSelectedDay(date) {
      let [year, month, day] = moment.getYearMonthDate(date);
      this.display.year = year;
      this.display.month = month;
      this.display.day = day;
      this.$emit("update:value", date);
    },
    onClickMonth() {
      if (this.mode === "month") {
        this.mode = "day";
      } else {
        this.mode = "month";
      }
    },
    onClickPrevYear() {
      let oldDate = new Date(this.display.year, this.display.month);
      let newDate = moment.addYear(oldDate, -1);
      let [year, month] = moment.getYearMonthDate(newDate);
      this.display.year = year;
      this.display.month = month;
      this.$emit("update:value", newDate);
    },
    onClickPrevMonth() {
      let oldDate = new Date(this.display.year, this.display.month);
      let newDate = moment.addMonth(oldDate, -1);
      let [year, month] = moment.getYearMonthDate(newDate);
      this.display.year = year;
      this.display.month = month;
      this.$emit("update:value", newDate);
    },
    onClickNextYear() {
      let oldDate = new Date(this.display.year, this.display.month);
      let newDate = moment.addYear(oldDate, 1);
      let [year, month] = moment.getYearMonthDate(newDate);
      this.display.year = year;
      this.display.month = month;
      this.$emit("update:value", newDate);
    },
    onClickNextMonth() {
      let oldDate = new Date(this.display.year, this.display.month);
      let newDate = moment.addMonth(oldDate, 1);
      let [year, month] = moment.getYearMonthDate(newDate);
      this.display.year = year;
      this.display.month = month;
      this.$emit("update:value", newDate);
    },
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
    height: 30px;
    padding: 3px 0;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
  &-col {
    color: #999;
    position: relative;
    &.currentMonth {
      color: #333;
    }
    &.today {
      color: $blue;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      line-height: 28px;
      text-align: center;
    }
    &.selectedDay {
      span {
        border-radius: 50%;
        background: $blue;
        color: #fff;
      }
    }
  }
  &-select-month {
    width: 250px;
    height: 211px;
  }
}
</style>
