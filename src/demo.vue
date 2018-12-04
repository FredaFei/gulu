<template>
  <div id="demo">
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="slides-item">slide 1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="slides-item">slide 2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="slides-item">slide 3</div>
      </g-slides-item>
    </g-slides>

    <!--<div class="test">
      <g-cascader :source.sync="source" :load-data="loadData" :selected.sync="selected" popover-height="200px"></g-cascader>
    </div>
    <div class="test">
      <g-cascader :source.sync="source" :selected.sync="selected" popover-height="200px"></g-cascader>
    </div>
    <div class="test">
      <g-collapse :selected.sync="selectedTab">
        <g-collapse-item title="title_1" name="1">content_1</g-collapse-item>
        <g-collapse-item title="title_2" name="2">content_2</g-collapse-item>
        <g-collapse-item title="title_3" name="3">content_3</g-collapse-item>
        <g-collapse-item title="title_4" name="4">content_4</g-collapse-item>
      </g-collapse>
      {{selectedTab}}
    </div>

    <div class="test">
      <g-popover position="top">
        <template slot="popover" slot-scope="{close}">
          {{close}} this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover
          <button>close</button>
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <g-popover position="right">
        <template slot="popover">
          this is a popover
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <g-popover position="bottom">
        <template slot="popover">
          this is a popover
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <g-popover position="left">
        <template slot="popover">
          this is a popover
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <br /><br />
      <g-popover position="top" trigger="hover">
        <template slot="popover">
          this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover this is a popover,this is a popover,this is a popover

        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="popover">
          this is a popover
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <g-popover position="bottom" trigger="hover">
        <template slot="popover">
          this is a popover
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="popover">
          this is a popover
        </template>
        <button @click="selectedFn">click me</button>
      </g-popover>
    </div>

    <div class="module-wrapper">
      <div class="module-hd">
        <h2>tabs</h2>
        <h5>代码演示:</h5>
      </div>
      <div class="module-bd">
        <g-tabs :selected.sync="selectedTabs" @update:selected="selectedFn">
          <g-tabs-header>
            <template slot="actions">
              <button>设置</button>
            </template>
            <g-tabs-item name="sport">
              <g-icon name="settings"></g-icon>
              sport
            </g-tabs-item>
            <g-tabs-item name="music">music</g-tabs-item>
            <g-tabs-item name="moving">moving</g-tabs-item>
          </g-tabs-header>
          <g-tabs-body>
            <g-tabs-pane name="sport">sport content</g-tabs-pane>
            <g-tabs-pane name="music">music content</g-tabs-pane>
            <g-tabs-pane name="moving">moving content</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      </div>
    </div>
    <g-tabs :selected.sync="selectedTabs" @update:selected="selectedFn">
      <g-tabs-header>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="sport">
          <g-icon name="settings"></g-icon>
          sport
        </g-tabs-item>
        <g-tabs-item name="music">music</g-tabs-item>
        <g-tabs-item name="moving">moving</g-tabs-item>
      </g-tabs-header>
      <g-tabs-body>
        <g-tabs-pane name="sport">sport content</g-tabs-pane>
        <g-tabs-pane name="music">music content</g-tabs-pane>
        <g-tabs-pane name="moving">moving content</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <div class="module-wrapper">
      <div class="module-hd">
        <h2>Button 按钮</h2>
        <h5>代码演示:</h5>
      </div>
      <div class="module-bd">
        <div class="box">
          <g-button>默认</g-button>
          <g-button icon="settings">icon 左边</g-button>
          <g-button icon="right" icon-position="right">icon 右边</g-button>
          <g-button loading>loading</g-button>
          <g-button-group>
            <g-button icon="left">prev</g-button>
            <g-button loading>loading</g-button>
            <g-button icon="right" icon-position="right">next</g-button>
          </g-button-group>
        </div>
      </div>

    </div>
    <div class="module-wrapper">
      <div class="module-hd">
        <h2>Input 输入框</h2>
        <h5>代码演示:</h5>
      </div>
      <div class="module-bd">
        <div class="box">
          <g-input value="张三"></g-input>
          <g-input value="只读" readonly></g-input>
          <g-input value="disabled" disabled></g-input>
          <g-input value="12345" icon-type="error" message="密码长度需超过6位"></g-input>
          <g-input value="12345" icon-type="info" message="密码安全等级 一般"></g-input>
        </div>
      </div>
    </div>
    <div class="module-wrapper">
      <div class="module-hd">
        <h2>Toast 提示</h2>
        <h5>代码演示:</h5>
      </div>
      <div class="module-bd">
        <div class="box">
          <g-button @click="showTaost1">默认</g-button>
          <g-button @click="showTaost2">手动关闭</g-button>
          <g-button @click="showTaost2">顶部</g-button>
          <g-button @click="showTaost3">居中</g-button>
          <g-button @click="showTaost4">底部</g-button>
        </div>
      </div>
    </div>
    <div class="module-wrapper">
      <div class="module-hd">
        <h2>Grid 栅格</h2>
        <h5>代码演示:</h5>
      </div>
      <div class="module-bd">
        <div class="box">
          <g-row gutter="20">
            <g-col>col-1</g-col>
            <g-col>col-1</g-col>
          </g-row>
          <g-row gutter="20">
            <g-col span="8">col-8</g-col>
            <g-col span="8">col-8</g-col>
            <g-col span="8">col-8</g-col>
          </g-row>
          <g-row gutter="20">
            <g-col span="6">col-6</g-col>
            <g-col span="6">col-6</g-col>
            <g-col span="6">col-6</g-col>
            <g-col span="6">col-6</g-col>
          </g-row>
          <g-row gutter="20" align="right">
            <g-col span="17">col-17</g-col>
            <g-col span="5" offset="1">col-5|offset-1</g-col>
          </g-row>
          <g-row gutter="20">
            <g-col span="6">col-6</g-col>
            <g-col span="4" offset="4">col-4|offset-4</g-col>
            <g-col span="8" offset="2">col-8|offset-2</g-col>
          </g-row>
        </div>
      </div>
    </div>
    <div class="module-wrapper">
      <div class="module-hd">
        <h2>layout 布局</h2>
        <h5>代码演示:</h5>
      </div>
      <div class="module-bd">
        <g-layout class="demo">
          <g-header class="header">header</g-header>
          <g-content class="content">content</g-content>
          <g-footer class="footer">footer</g-footer>
        </g-layout>
        <g-layout class="demo">
          <g-sider class="sider">sider</g-sider>
          <g-layout class="demo">
            <g-header class="header">header</g-header>
            <g-content class="content">content</g-content>
            <g-footer class="footer">footer</g-footer>
          </g-layout>
        </g-layout>
      </div>
    </div>-->

  </div>
</template>

<script>
import Vue from 'vue'
// import Button from './button'
// import Icon from './icon'
// import ButtonGroup from './buttonGroup'
// import Input from './input'
// import GCol from './gCol'
// import GRow from './gRow'
// import GLayout from './layout'
// import GSider from './sider'
// import GHeader from './header'
// import GContent from './content'
// import GFooter from './footer'
// import Toast from './toast'
// import Tabs from './tabs'
// import TabsHeader from './tabsHeader'
// import TabsBody from './tabsBody'
// import TabsItem from './tabsItem'
// import TabsPane from './tabsPane'
// import Popover from './popover'
// import Collapse from './collapse'
// import CollapseItem from './collapseItem'
// import Cascader from './cascader'
import Slides from './slides'
import SlidesItem from './slidesItem'

// import plugin from './plugin'

// Vue.component('g-button', Button)
// Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)
// Vue.component('g-col', GCol)
// Vue.component('g-row', GRow)
// Vue.component('g-layout', GLayout)
// Vue.component('g-sider', GSider)
// Vue.component('g-header', GHeader)
// Vue.component('g-content', GContent)
// Vue.component('g-footer', GFooter)
// Vue.component('g-toast', Toast)
// Vue.use(plugin)
// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-header', TabsHeader)
// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)
// Vue.component('g-popover', Popover)
// Vue.component('g-collapse', Collapse)
// Vue.component('g-collapse-item', CollapseItem)
// Vue.component('g-cascader', Cascader)
Vue.component('g-slides', Slides)
Vue.component('g-slides-item', SlidesItem)


// import db from './db'
// function ajax(parentId = 0) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = db.filter(item => item.parent_id === parentId)
//       result.forEach(node => {
//         if (db.filter(item => item.parent_id === node.id).length > 0) {
//           node.isLeaf = false
//         } else {
//           node.isLeaf = true
//         }
//       })
//       resolve(result)
//     }, 3000)
//   })
// }

export default {
  data() {
    return {
      loading: true,
      value: '张三',
      message: '名字长度需大于2',
      value2: 'ha',
      selectedTabs: 'sport',
      selectedTab: ['3'],
      source: ajax(),
      // selected: [],
      selected: ''
    }
  },
  created() {
    // ajax(0).then(result => {
    //   this.source = result
    // })
    // this.source = [
    //     {
    //       name: '浙江',
    //       children: [
    //         {
    //           name: '杭州',
    //           children: [{ name: '拱墅' }, { name: '西湖' }, { name: '上城' }]
    //         }
    //       ]
    //     },
    //     {
    //       name: '福建',
    //       children: [
    //         {
    //           name: '福州',
    //           children: [
    //             { name: '鼓楼' },
    //             { name: '台江' },
    //             { name: '仓山' },
    //             { name: '马尾' }
    //           ]
    //         },
    //         {
    //           name: '厦门',
    //           children: [{ name: '思明' }, { name: '湖里' }, { name: '集美' }]
    //         }
    //       ]
    //     },
    //     {
    //       name: '山东',
    //       children: [
    //         {
    //           name: '济南',
    //           children: [{ name: '天桥' }, { name: '历下' }, { name: '市中' }]
    //         }
    //       ]
    //     }
    //   ]
  },
  mounted() {
    // this.showTaost()
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result)
      })
    },
    selectedFn() {
      console.log(89)
    },
    showTaost() {
      this.$toast('i am a toast!i am a toast!')
    },
    showTaost1() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          autoClose: 3
        }
      )
    },
    showTaost2() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          autoClose: false,
          position: 'top'
        }
      )
    },
    showTaost3() {
      this.$toast('i am a toast!', {
        autoClose: false,
        position: 'middle',
        closeButton: {
          text: '关闭',
          callback() {
            console.log('i know')
          }
        }
      })
    },
    showTaost4() {
      this.$toast(
        'i am a toast!i am a toast! <strong id="test">test strong</strong>',
        {
          position: 'bottom',
          enableHtml: true
        }
      )
    }
  }
}

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
#demo{
  padding: 20px;
}
.slides-item {
  width: 100%;
  height: 150px;
  background: #dddddd;
}

.module-wrapper {
  margin: 20px;
  color: #0d1a26;
}

.module-hd {}

.module-bd {
  margin-top: 10px;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #ebedf0;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.g-button {
  margin-bottom: 16px;
}

.demo+.demo {
  margin-top: 20px;
}

.demo>.sider {
  width: 200px;
  background: #aaaaaa;
}

.demo>.header,
.demo>.footer {
  line-height: 40px;
  background: blue;
  color: #fff;
  font-size: 16px;
}

.demo>.content {
  background: #ddd;
  height: 200px;
}

body {
  height: 100px;
}

.test {
  margin: 20px;
  width: 400px;
}
</style>
