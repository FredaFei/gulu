<template>
  <div id="demo">
    <g-button icon="upload">上传文件</g-button>
    <g-uploader :name="file" action="https://node-server-upload.herokuapp.com/" :size-limit="2*1024*1024"
    :parse-reponse="parseReponse"></g-uploader>
  </div>
</template>

<script>
import Vue from 'vue'
import Uploader from './uploader/uploader'
import Button from './button/button'
// import GIcon from '../icon'
Vue.component('g-uploader', Uploader)
Vue.component('g-button', Button)
// Vue.component('g-icon', GIcon)

export default {
  data() {
    return {

    }
  },
  method: {
    parseReponse(){}
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

#demo {
  padding: 20px;
}
</style>
