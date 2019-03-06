<template>
  <div>
    <h5>只有一页时</h5>
    <am-pager :current-page="currentPage" :total-page="1" :hide-on-single-page="false"
    :current-page.sync="currentPage"></am-pager>
    <h3>使用方式</h3>
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
