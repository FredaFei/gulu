<template>
  <div class="example-box">
    <p><strong>click 触发</strong></p>
    <am-popover position="left" z-index="1000">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <am-button>left</am-button>
    </am-popover>
    <am-popover position="top" z-index="1000">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <am-button>top</am-button>
    </am-popover>

    <am-popover position="right" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>right</am-button>
    </am-popover>

    <am-popover position="bottom" z-index="1000">
      <template slot="popover" slot-scope="{close}">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>内部触发关闭</p>
            <p>这里是内容</p>
            <am-button @click="close">关闭</am-button>
          </div>
        </div>
      </template>
      <am-button>bottom</am-button>
    </am-popover>

    <p><strong>hover 触发</strong></p>
    <am-popover position="left" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>left</am-button>
    </am-popover>
    <am-popover position="top" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>top</am-button>
    </am-popover>
    <am-popover position="right" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>right</am-button>
    </am-popover>
    <am-popover position="bottom" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>bottom</am-button>
    </am-popover>

    <p><strong>禁止触发</strong></p>
    <am-popover position="left" trigger="hover" disabled>
      <template slot="popover">
        this is a content
      </template>
      <am-button>left</am-button>
    </am-popover>
  </div>
</template>
<script>
import { AmPopover, AmButton } from "../../../src/index";
export default {
  components: { AmPopover, AmButton }
};
</script>
<style lang="scss" scoped>
.pop-body {
  width: 200px;
  .title {
    padding: 8px 0;
    font-size: 18px;
    color: #333333;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
  }
  p {
    line-height: normal;
  }
}
</style>

