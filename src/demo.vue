<template>
  <div id="demo">
    <!-- <g-scroll class="scroll">
      <div class="view">
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <p><img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg" alt=""></p>
        <h3>1 this is a test text this is a test text this is a test text this is a test text this is a test text this is a test text</h3>
        <h3>2</h3>
        <h3>3</h3>
        <h3>4</h3>
        <h3>5</h3>
        <h3>6</h3>
        <h3>7</h3>
        <h3>8</h3>
        <h3>9</h3>
        <h3>10</h3>
        <h3>11</h3>
        <h3>12</h3>
        <h3>13</h3>
        <h3>14</h3>
        <h3>15</h3>
        <h3>16</h3>
        <h3>17</h3>
        <h3>18</h3>
        <h3>19</h3>
        <h3>20</h3>
        <h3>21</h3>
        <h3>22</h3>
        <h3>23</h3>
        <h3>24</h3>
        <h3>25</h3>
        <h3>26</h3>
        <h3>27</h3>
        <h3>28</h3>
        <h3>29</h3>
        <h3>30</h3>
        <h3>31</h3>
        <h3>32</h3>
        <h3>33</h3>
        <h3>34</h3>
        <h3>35</h3>
        <h3>36</h3>
        <h3>37</h3>
        <h3>38</h3>
        <h3>39</h3>
        <h3>40</h3>
        <h3>41</h3>
        <h3>42</h3>
        <h3>43</h3>
        <h3>44</h3>
        <h3>45</h3>
        <h3>46</h3>
        <h3>47</h3>
        <h3>48</h3>
        <h3>49</h3>
        <h3>50</h3>
      </div>
    </g-scroll>
    <h1>实例一</h1>
    <g-table :data-source="dataSource" :border="true" expend-field="description" checkable :selected-items.sync="selectedItems" :loading="loading" :order-by.sync="orderBy" @update:orderBy="xx" :height="400">
      <g-table-column text="姓名" field="name" :width="200">
        <template slot-scope="props">
          <a :href="`/user/${props.value}`">{{props.value}}</a>
        </template>
      </g-table-column>
      <g-table-column text="班级" field="class" :width="200"></g-table-column>
      <g-table-column text="体重" field="weigth">
        <template slot-scope="props">
          <h1>{{props.value}}</h1>
        </template>
      </g-table-column>
      <template slot-scope="slotProps">
        <button @click="onEdit(slotProps.data)">编辑</button>
        <button @click="onRemove(slotProps.data)">删除</button>
      </template>
    </g-table> -->
    <g-collapse :selected.sync="selected" single>
      <g-collapse-item title="葡萄" name="葡萄">
        <div>葡萄，这是葡萄的说明</div>
      </g-collapse-item>
      <g-collapse-item title="苹果" name="苹果">
        <div>苹果，这是苹果的说明</div>
      </g-collapse-item>
      <g-collapse-item title="橙子" name="橙子">
        <div>橙子，这是橙子的说明</div>
      </g-collapse-item>
    </g-collapse>
    <br><br><br><br>
    <g-collapse :selected.sync="selected1">
      <g-collapse-item title="葡萄2" name="葡萄2">
        <template slot="title">
          一致性 Consistency <g-icon name="loading"></g-icon>
        </template>
        <div>葡萄2，与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-item>
      <g-collapse-item title="苹果2" name="苹果2">
        <div>苹果2，与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-item>
      <g-collapse-item title="橙子2" name="橙子2">
        <div>橙子2，与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-item>
      <g-collapse-item title="橙子444" name="橙子222">
        <!-- <div>橙子2，与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div> -->
      </g-collapse-item>
    </g-collapse>

  </div>
</template>

<script>
import Vue from "vue";
import Table from "./table/table";
import TableColumn from "./table/tableColumn";
import Scroll from "./scroll/scroll";

import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapseItem";
import Icon from "./icon";
Vue.component("g-table", Table);
Vue.component("g-table-column", TableColumn);
Vue.component("g-scroll", Scroll);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-icon", Icon);

export default {
  data() {
    return {
      selected: [],
      selected1: [],
      selectedItems: [],
      dataSource: [
        {
          id: 1,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 2,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 3,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 4,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 5,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 6,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 7,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 8,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 9,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 10,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 11,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 12,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 13,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 14,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        }
      ],
      height: 50,
      loading: false,
      orderBy: {
        weigth: "desc",
        height: "asc"
      }
    };
  },
  created() {},
  methods: {
    onEdit(item) {
      alert(item.id);
    },
    onRemove(item) {
      console.log(item);
    },
    xx() {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.weigth < b.weigth);
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
#demo {
  padding: 20px;
}
.scroll {
  height: 400px;
}
.view {
  font-size: 16px;
}
.slide-box {
  margin-bottom: 40px;
  width: 100%;
  height: 150px;
  background: #eee;
}
</style>