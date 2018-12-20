<template>
  <div class="g-upload-wrapper">
    <div class="g-upload-content" @click="onClickUploadFile">
      <slot></slot>
    </div>
    <div class="temp" ref="temp" style="overflow:hidden;width:0;height:0;"></div>
    <div class="preview-list" v-for="img in fileList" :key="img.name">
      <img :src="img.url" alt="preview" ref="preview">
      <span class="name">{{img.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'guluUploader',
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'POST'
    },
    sizeLimit: {
      type: Number,
      default: 3 * 1024 * 1024
    },
    fileList: {
      type: Array,
      default: () => []
    },
    parseReponse: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      // url: 'about:blank'
    }
  },
  mounted() {

  },
  methods: {
    onClickUploadFile() {
      let input = this.createInput()
      input.addEventListener('change', () => {
        let file = input.files[0]
        this.uploadFile(file)
        input.remove()
      })
      input.click()
    },
    createInput() {
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      return input
    },
    uploadFile(file) {
      let formData = new FormData();
      formData.append(this.name, file)
      let {name,size,type} = file
      this.doUploadFile(formData,(response)=>{
        let url = this.parseReponse(response)
        // this.url = url
        while (this.fileList.filter(n=>n.name===name).length>0) {
          let dotIndex = name.lastIndexOf('.')
          let nameWithoutExtension = name.substring(0,dotIndex)
          let extension = name.substring(dotIndex)
          name = nameWithoutExtension + '(1)' + extension
        }
        this.$emit('update:fileList',[...this.fileList,{name,size,type,url}])
      })
    },
    doUploadFile(formData,successFn) {
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        successFn(xhr.response)
      }
      xhr.send(formData)
    }
  },

}
</script>
<style lang="scss" scoped>

</style>