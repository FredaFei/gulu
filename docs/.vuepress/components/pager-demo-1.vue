<template>
  <div>
    <h3>代码演示</h3>
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
