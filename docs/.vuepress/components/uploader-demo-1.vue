<template>
  <div id="demo">
    <h3>代码演示</h3>
    <p class="error">上传的文件最大尺寸不超过3MB</p>
    <am-uploader name="files" action="http://127.0.0.1:3000/upload" :file-list.sync="fileList" 
    :size-limit="3*1024*1024" :parse-reponse="parseReponse" @error="error=$event" accept="image/png">
      <am-button icon="upload">上传文件</am-button>
    </am-uploader>
    <h3>使用方式</h3>
  </div>
</template>

<script>
import AmUploader from '../../../src/uploader/uploader'
import AmButton from '../../../src/button/button'

export default {
  name: 'uploader1',
  components: {
    AmUploader,
    AmButton
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

<style lang="scss" scoped>

</style>
