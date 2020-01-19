<template>
  <div class="example-box">
    <p><strong>只有一页时</strong></p>
    <am-pager :current-page="currentPage" :total-page="1" :hide-on-single-page="false"
    :current-page.sync="currentPage"></am-pager>
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
