<template>
  <div class="example-box">
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

  </div>
</template>

<script>
import { AmLayout, AmAside, AmHeader, AmContent, AmFooter } from '../../../src/index'
export default {
  components: { AmLayout, AmAside, AmHeader, AmContent, AmFooter }
};
</script>

<style scoped>
.demoCol {
  background: #ccc;
}
</style>
