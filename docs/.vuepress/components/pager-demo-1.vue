<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
      <am-pager :current-page="currentPage" :total-page="10" :current-page.sync="currentPage"></am-pager>
  </div>
</template>
<script>
import AmPager from '../../../src/pager/pager'

export default {
  components: {
    AmPager
  },
   data() {
    return {
      currentPage: 1
    }
  }
}
</script>
