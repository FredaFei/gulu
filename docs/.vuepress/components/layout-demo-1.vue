<template>
  <div class="box">
    <am-layout style="color: white; margin-bottom:50px;">
      <am-header style="height: 50px; background:lightskyblue;">
        header
      </am-header>
      <am-content style="height: 100px; background:deepskyblue;">
        content
      </am-content>
      <am-footer style="height: 50px; background:lightskyblue;">
        footer
      </am-footer>
    </am-layout>

    <am-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <am-header style="height: 50px; background:lightskyblue;">
        header
      </am-header>
      <am-layout>
        <am-aside style="height: 100px; background:#ddd; width:200px; color: black;">
          aside
        </am-aside>
        <am-content style="height: 100px; background:deepskyblue;">
          content
        </am-content>
      </am-layout>
      <am-footer style="height: 50px; background:lightskyblue;">
        footer
      </am-footer>
    </am-layout>

    <am-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <am-aside style=" background:#ddd; width:200px; color: black;">
        aside
      </am-aside>
      <am-layout>
        <am-header style="height: 50px; background:lightskyblue;">
          header
        </am-header>
        <am-content style="height: 100px; background:deepskyblue;">
          content
        </am-content>
        <am-footer style="height: 50px; background:lightskyblue;">
          footer
        </am-footer>
      </am-layout>
    </am-layout>
    <h3>使用方式</h3>
  </div>
</template>

<script>
import Layout from "../../../src/layout/layout";
import Sider from "../../../src/layout/aside";
import Header from "../../../src/layout/header";
import Content from "../../../src/layout/content";
import Footer from "../../../src/layout/footer";
export default {
  components: {
    AmLayout: Layout,
    AmSider: Sider,
    AmHeader: Header,
    AmContent: Content,
    AmFooter: Footer
  }
};
</script>

<style scoped>
.demoCol {
  background: #ccc;
}
</style>
