<template>
  <div class="g-upload-wrapper">
    <div class="g-upload-content" @click="onClickUploadFile">
      <slot></slot>
    </div>
    <div class="temp" ref="temp" style="overflow:hidden;width:0;height:0;"></div>
    <div class="preview-list" v-for="img in fileList" :key="img.name">
      <template v-if="img.status==='uploading'">loading</template>
      <img :src="img.url" alt="preview" ref="preview">
      <span class="name">{{img.name}}</span>
      <button class="del" @click="onDeleteFile(img)">X</button>
      <template v-if="img.status==='fail'">fail</template>
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
      url: 'about:blank'
    }
  },
  mounted() {

  },
  methods: {
    onClickUploadFile() {
      let input = this.createInput()
      input.addEventListener('change', () => {
        this.uploadFile(input.files[0])
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
    uploadFile(rowFile) {
      let formData = new FormData();
      formData.append(this.name, rowFile)
      let { name, size, type } = rowFile
      let newName = this.generatorName(name)
      this.beforeUploadFile(rowFile, newName)
      this.doUploadFile(formData, (response) => {
        let url = this.parseReponse(response)
        // this.url = url
        this.afterUploadFile(newName, url)
      }, () => {
        console.log(this.fileList)
        this.uploadFileError(newName)
      })
    },
    beforeUploadFile(rowFile, name) {
      let { size, type } = rowFile
      this.$emit('update:fileList', [...this.fileList, { name, size, type, status: 'uploading' }])
    },
    afterUploadFile(name, url) {
      let file = this.fileList.filter(f => f.name === name)[0]
      let index = this.fileList.indexOf(file)
      let copyFile = { ...file }
      copyFile.url = url
      copyFile.status = 'success'
      let copyFileList = [...this.fileList]
      copyFileList.splice(index, 1, copyFile)
      this.$emit('update:fileList', copyFileList)
    },
    uploadFileError(newName) {
      let file = this.fileList.filter(f => f.name === newName)[0]
      let index = this.fileList.indexOf(file)
      console.log(this.fileList)
      let copyFile = { ...file }
      console.log(copyFile)
      copyFile.status = 'fail'
      let copyFileList = [...this.fileList]
      copyFileList.splice(index, 1, copyFile)
      this.$emit('update:fileList', copyFileList)
    },
    generatorName(name) {
      while (this.fileList.filter(n => n.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.')
        let nameWithoutExtension = name.substring(0, dotIndex)
        let extension = name.substring(dotIndex)
        name = nameWithoutExtension + '(1)' + extension
      }
      return name
    },
    doUploadFile(formData, successFn, errorFn) {
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        successFn(xhr.response)
      }
      xhr.onerror = () => {
        errorFn()
      }
      xhr.send(formData)
    },
    onDeleteFile(file) {
      let yes = window.confirm('确定删除该文件吗？')
      if (yes) {
        let copy = [...this.fileList]
        let index = copy.indexOf(file)
        copy.splice(index, 1)
        this.$emit('update:fileList', copy)
      }
    }
  },

}
</script>
<style lang="scss" scoped>

</style>