<template>
  <div>
    <h3>代码演示</h3>
    <h4>click 触发</h4>
    <g-popover position="left">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <span class="box" @click="selectedFn">left</span>
    </g-popover>
    <g-popover position="top">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <span class="box" @click="selectedFn">top</span>
    </g-popover>
    
    <g-popover position="right">
      <template slot="popover">
        this is a content
      </template>
      <span class="box" @click="selectedFn">right</span>
    </g-popover>
    
    <g-popover position="bottom">
      <template slot="popover" slot-scope="{close}">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
            <span class="box">关闭</span>
          </div>
        </div>
      </template>
      <span class="box" @click="selectedFn">bottom</span>
    </g-popover>

    <h4>hover 触发</h4>
    <g-popover position="left" trigger="hover">
      <template slot="popover">
        this is a content
      </template>
      <span class="box">left</span>
    </g-popover>
    <g-popover position="top" trigger="hover">
      <template slot="popover">
        this is a content
      </template>
      <span class="box">top</span>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="popover">
        this is a content
      </template>
      <span class="box">right</span>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template slot="popover">
        this is a content
      </template>
      <span class="box">bottom</span>
    </g-popover>
    <h3>使用方式</h3>
  </div>
</template>
<script>
import Popover from '../../../src/popover/popover'
export default {
  components: {
    'GPopover': Popover
  },
  methods: {
    selectedFn() {
      console.log('popover')
    }
  }
}
</script>
<style lang="scss">
.box{
  display: inline-block;
  padding: 10px 16px;
  font-size: 16px;
  color: #333333;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.pop-body{
  width: 200px;
  .title{
    padding: 8px 0;
    font-size: 18px;
    color: #333333;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
  }
  p{
    line-height: normal;
  }
}
</style>

