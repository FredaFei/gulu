<template>
  <div>
    <h3>代码演示</h3>
      <g-pager :current-page="currentPage" :total-page="10" :current-page.sync="currentPage"></g-pager>
  </div>
</template>
<script>
import GPager from '../../../src/pager/pager'

export default {
  components: {
    GPager
  },
   data() {
    return {
      currentPage: 1
    }
  }
}
</script>
