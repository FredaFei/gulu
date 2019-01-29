<template>
  <div class="g-date-picker-wrapper">
    <g-popover position="bottom">
      <g-input></g-input>
      <template slot="popover">
        <div class="g-date-picker-pop">
          <div class="g-date-picker-pop-nav">
            <g-icon name="double-left"></g-icon>
            <g-icon name="left"></g-icon>
            <span @click="onClickYear">2018年</span>
            <span @click="onClickMonth">10月</span>
            <g-icon name="double-right"></g-icon>
            <g-icon name="right"></g-icon>
          </div>
          <div class="g-date-picker-pop-panes">
            <div :class="classes('weeks')">
              <span :class="classes('week')" v-for="n in weeksMap">{{n}}</span>
            </div>
            <div class="g-date-picker-pop-content" v-if="mode==='years'">
              <div :class="classes('row')">
                <span :class="classes('col')" v-for="n in visibleDate">{{n.getDate()}}</span>
              </div>
            </div>
            <div class="g-date-picker-pop-content" v-else-if="mode==='months'">月</div>
            <div class="g-date-picker-pop-content" v-else>日</div>
          </div>
          <div class="g-date-picker-pop-actions"></div>
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
  props: {},
  data() {
    return {
      mode: "years",
      weeksMap: ["日", "一", "二", "三", "四", "五", "六"]
    };
  },
  mounted() {},
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
    onClickYear() {},
    onClickMonth() {},
    classes(name) {
      return `g-date-picker-pop-${name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
