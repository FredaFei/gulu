<template>
  <div class="g-date-picker-wrapper" ref="datePicker">
    <g-popover position="bottom" ref="popover" :container="popoverContainer" @open="onOpen" :disabled="disabled">
      <g-input :value="formattedValue" clearable prefix="date" @clear="onClickClear" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" type="text" @keyup-enter="onEnter" @blur="onBlur" @change="onChange" @input="onInput" ref="input"></g-input>
      <template slot="popover">
        <div class="g-date-picker-pop" @selectstart.prevent>
          <div class="g-date-picker-pop-nav">
            <template v-if="mode==='date'">
              <g-icon name="double-left" @click="onClickPrevYear" :class="classes('prev-year')"></g-icon>
              <g-icon name="left" @click="onClickPrevMonth" :class="classes('prev-month')"></g-icon>
              <div>
                <span :class="classes('current-year')" @click="onClickChangeMode('year')">{{display.year}}年</span>
                <span :class="classes('current-month')" @click="onClickChangeMode('month')">{{display.month+1}}月</span>
              </div>
              <g-icon name="double-right" @click="onClickNextYear" :class="classes('next-year')"></g-icon>
              <g-icon name="right" @click="onClickNextMonth" :class="classes('next-month')"></g-icon>
            </template>
            <template v-else-if="mode==='year'">
              <g-icon name="double-left" @click="onClickRangeYear(0)" :class="classes('prev-year')"></g-icon>
              <div>
                <span :class="classes('current-year')">{{visibleYears[1]}}-{{visibleYears[10]}}</span>
              </div>
              <g-icon name="double-right" @click="onClickRangeYear(11)" :class="classes('next-year')"></g-icon>
            </template>
            <template v-else>
              <g-icon name="double-left" @click="onClickPrevYear" :class="classes('prev-year')"></g-icon>
              <div>
                <span :class="classes('current-month')" @click="onClickChangeMode('year')">{{display.year}}</span>
              </div>
              <g-icon name="double-right" @click="onClickNextYear" :class="classes('next-year')"></g-icon>
            </template>
          </div>
          <div class="g-date-picker-pop-panes">
            <div class="g-date-picker-pop-content">
              <template v-if="mode==='date'">
                <div :class="classes('weeks')">
                  <span :class="classes('week')" v-for="n in weeksMap" :key="n">{{n}}</span>
                </div>
                <div :class="classes('tables')">
                  <div :class="classes('row')" v-for="i in moment.range(1,7)" :key="i">
                    <div :class="[classes('col'),{'currentMonth': isCurrentMonth(getVisibleDate(i,j)),
                  'selectedDate': isSelectedDate(getVisibleDate(i,j)),'selectedDay': isSelectedDay(getVisibleDate(i,j)),'today': isToday(getVisibleDate(i,j))}]" :key="j" v-for="j in moment.range(1,8)" @click="onClickCell(visibleDate[(i-1)*7+j-1])"><span class="day">{{visibleDate[(i-1)*7+j-1].getDate()}}</span></div>
                  </div>
                </div>
              </template>
              <template v-else-if="mode==='year'">
                <div :class="classes('select-year')">
                  <div :class="classes('row')" v-for="i in moment.range(1,5)" :key="i+'year'">
                    <div :class="[classes('col'),{selectedYear:isSelectedYear(visibleYears[(i-1)*3+j-1]),'prevOrNext': isFirstOrLast(i,j)}]" v-for="j in moment.range(1,4)" :key="visibleYears[(i-1)*3+j-1]" @click="onClickYear((i-1)*3+j-1)">
                      <span>{{visibleYears[(i-1)*3+j-1]}}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div :class="classes('select-month')">
                  <div :class="classes('row')" v-for="i in moment.range(1,5)" :key="i+'month'">
                    <div :class="[classes('col'),{'selectedMonth':isSelectedMonth((i-1)*3+j-1)}]" v-for="j in moment.range(1,4)" :key="monthMap[(i-1)*3+j-1]" @click="onClickMonth((i-1)*3+j-1)"><span>{{monthMap[(i-1)*3+j-1]}}</span></div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="g-date-picker-pop-actions" v-show="mode==='date'">
            <g-button @click="onClickToday">今天</g-button>
            <g-button @click="onClickClear">清除</g-button>
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GPopover from "../popover/popover";
import GIcon from "../icon";
import GButton from "../button/button";
import GInput from "../input/input";
import moment from "./moment";
export default {
  name: "guluDatePicker",
  components: {
    GPopover,
    GIcon,
    GButton,
    GInput
  },
  props: {
    value: {
      type: [Date, String]
    },
    placeholder: {
      type: String,
      default: "请选择日期"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let [year, month] = moment.getYearMonthDate(this.value || new Date());
    return {
      mode: "date",
      weeksMap: ["日", "一", "二", "三", "四", "五", "六"],
      monthMap: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ],
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
      let date = new Date(this.display.year, this.display.month, 1);
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
    visibleYears() {
      let start = Math.floor(this.display.year / 10) * 10;
      return Array.from({ length: 12 }, (val, index) => start - 1 + index);
    },
    formattedValue() {
      if (!this.value) {
        return "";
      }
      let [year, month, day] = moment.getYearMonthDate(this.value);
      return `${year}-${moment.pad2(month + 1)}-${moment.pad2(day)}`;
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
    isSelectedDate(date) {
      if (!this.value) {
        return false;
      }
      let [year1, month1, day1] = moment.getYearMonthDate(date);
      let [year, month, day] = moment.getYearMonthDate(this.value);
      return year1 === year && month1 === month && day1 === day;
    },
    isSelectedDay(date) {
      if (!this.value) {
        return false;
      }

      let [year1, month1, day1] = moment.getYearMonthDate(date);
      let [year, month, day] = moment.getYearMonthDate(this.value);
      return this.isCurrentMonth(date) && day1 === day;
    },
    isSelectedMonth(index) {
      return this.display.month === index;
    },
    isSelectedYear(year) {
      let { year: year1 } = this.display;
      return year1 === year;
    },
    isToday(date) {
      if (!this.isCurrentMonth(date)) {
        return false;
      }
      let [year, month, day] = moment.getYearMonthDate(date);
      let [year1, month1, day1] = moment.getYearMonthDate(new Date());
      return year1 === year && month1 === month && day1 === day;
    },
    isFirstOrLast(row, col) {
      let index = (row - 1) * 3 + col - 1;
      return index === 0 || index === this.visibleYears.length - 1;
    },
    onClickMonth(index) {
      this.display.month = index;
      this.mode = "date";
    },
    onEnter() {
      if (!this.formattedValue) {
        return false;
      }
      this.$refs.popover.close();
      this.onBlur();
    },
    onBlur() {
      let inputs = [...document.getElementsByTagName("input")];
      inputs.forEach(n => n.blur());
    },
    onChange(event) {
      if (!event || !event.target.value) {
        this.$emit("input", undefined);
        return;
      }
      this.$refs.input.setRawValue(this.formattedValue);
    },
    updateInputValue(year, month, day) {
      let currentMonthFirstDay = new Date(year, month, 1);
      let newDate = new Date(year, month, day);
      let lastDay = moment.lastDayOfMonth(currentMonthFirstDay).getDate();
      // 当输入的日大于当前月的最后一天时，有两种交互方案：1.展示上次的日期
      // 2.display.year +=1。当前选择的是1方案
      if (day > lastDay) {
        let [year1, month1, day1] = this.formattedValue.split("-");
        newDate = new Date(year1, month1 - 1, day1);
      }
      return newDate;
    },
    onInput(value) {
      let regExp = /^\d{4}-\d{2}-\d{2}$/g;
      if (value.match(regExp)) {
        let [year, month, day] = value.split("-");
        year = year - 0;
        month = month - 1;
        day = day - 0;
        this.display = { year, month };
        let newDate = this.updateInputValue(year, month, day);
        this.$emit("input", newDate);
      }
    },
    onClickCell(date) {
      let [year, month] = moment.getYearMonthDate(date);
      this.display = { year, month };
      this.$emit("input", date);
      this.$refs.popover.close();
    },
    onClickChangeMode(name) {
      this.mode = name;
    },
    controlPlate(type, count) {
      let oldDate = new Date(this.display.year, this.display.month);
      let newDate = moment[type](oldDate, count);
      let [year, month] = moment.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickRangeYear(index) {
      this.display.year = this.visibleYears[index];
    },
    onClickYear(index) {
      this.display.year = this.visibleYears[index];
      this.mode = "date";
    },
    onClickPrevYear() {
      this.controlPlate("addYear", -1);
    },
    onClickPrevMonth() {
      this.controlPlate("addMonth", -1);
    },
    onClickNextYear() {
      this.controlPlate("addYear", 1);
    },
    onClickNextMonth() {
      this.controlPlate("addMonth", 1);
    },
    onClickToday() {
      this.$emit("input", new Date());
      this.$refs.popover.close();
    },
    onClickClear() {
      this.$emit("input", undefined);
      let [year, month] = moment.getYearMonthDate(new Date());
      this.display = { year, month };
      this.$refs.popover.close();
    },
    onOpen() {
      this.mode = "date";
    },
    classes(name) {
      return `g-date-picker-pop-${name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.g-date-picker-wrapper {
  .g-popover-wrapper {
    width: 200px;
  }
  .g-date-picker-pop {
    .g-icon:hover {
      color: $blue;
    }
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
      .day {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        line-height: 28px;
        text-align: center;
        transition: background 0.2s ease;
        &:hover {
          background: #e6f7ff;
        }
      }
      &.selectedDay {
        .day {
          background: #d1e9ff;
        }
      }
      &.selectedDate {
        .day {
          background: $blue;
          color: #fff;
        }
      }
    }
    &-select-year,
    &-select-month {
      width: 250px;
      height: 266px;
    }
    &-tables {
      padding: 6px 0;
    }
    &-actions {
      padding-top: 10px;
      border-top: 1px solid $gray;
    }
    &-select-year {
      .g-date-picker-pop-row {
        width: 100%;
        padding: 16px 0;
      }
      .g-date-picker-pop-col {
        flex: 1;
        width: 33.33%;
        color: #333;
        &.selectedYear {
          span {
            background: $blue;
            color: #fff;
          }
        }
        &.prevOrNext {
          span {
            color: rgba(0, 0, 0, 0.25);
          }
        }
        span {
          padding: 2px 4px;
          display: inline-block;
          border-radius: 2px;
          transition: background 0.3s ease;
          &:hover {
            background: #e6f7ff;
            color: $blue;
            cursor: pointer;
          }
        }
      }
    }
    &-select-month {
      .g-date-picker-pop-row {
        width: 100%;
        padding: 16px 0;
      }
      .g-date-picker-pop-col {
        flex: 1;
        width: 33.33%;
        color: #333;
        span {
          padding: 2px 4px;
          display: inline-block;
          border-radius: 2px;
          transition: background 0.3s ease;
          &:hover {
            background: #e6f7ff;
            color: $blue;
            cursor: pointer;
          }
        }
        &.selectedMonth {
          span {
            background: $blue;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
