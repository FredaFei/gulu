<template>
  <div id="demo">
    {{error}}
    <g-uploader name="files" action="http://127.0.0.1:3000/upload" :file-list.sync="fileList" 
    :size-limit="3*1024*1024" :parse-reponse="parseReponse" @error="error=$event">
      <g-button icon="upload">上传文件</g-button>
    </g-uploader>
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
      fileList: [],
      error: ''
    }
  },
  methods: {
    parseReponse(data){
      let {id} = JSON.parse(data)
      return `http://127.0.0.1:3000/preview/${id}`
    },
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
