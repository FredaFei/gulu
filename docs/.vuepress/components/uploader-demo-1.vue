<template>
  <div id="demo">
    <h3>代码演示</h3>
    <p class="error">上传的文件最大尺寸不超过3MB</p>
    <g-uploader name="files" action="http://127.0.0.1:3000/upload" :file-list.sync="fileList" 
    :size-limit="3*1024*1024" :parse-reponse="parseReponse" @error="error=$event" accept="image/png">
      <g-button icon="upload">上传文件</g-button>
    </g-uploader>
    <h3>使用方式</h3>
  </div>
</template>

<script>
import GUploader from '../../../src/uploader/uploader'
import GButton from '../../../src/button/button'

export default {
  name: 'uploader1',
  components: {
    GUploader,
    GButton
  },
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

</style>
