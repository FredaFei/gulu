<template>
  <div class="g-uploader">
    <div class="g-uploader-content" @click="onClickUploadFile">
      <slot></slot>
    </div>
    <ol class="g-uploader-preview-list">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status==='uploading'">
          <g-icon name="loading" class="g-uploader-spin"></g-icon>
        </template>
        <template v-if="file.type.indexOf('image')===0">
          <img :src="file.url" class="g-uploader-preview">
        </template>
        <template v-else>
          <div class="g-uploader-defaultImage"></div>
        </template>
        <span class="g-uploader-name">{{file.name}}</span>
        <button class="g-uploader-remove" @click="onDeleteFile(file)">X</button>
        <template v-if="file.status==='fail'">fail</template>
      </li>
    </ol>
    <div class="temp" ref="temp" style="overflow:hidden;width:0;height:0;"></div>
  </div>
</template>
<script>
import GIcon from '../icon'
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
      type: Number
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
  components: { GIcon },
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
        this.uploadFiles(input.files)
        input.remove()
      })
      input.click()
    },
    createInput() {
      this.$refs.temp.innerHTML = ''
      let input = document.createElement('input')
      input.type = 'file'
      input.multiple = true
      this.$refs.temp.appendChild(input)
      return input
    },
    uploadFiles(rowFiles) {
      let newNames = []
      for (let i = 0; i < rowFiles.length; i++) {
        let rowFile = rowFiles[i]
        let { name, size, type } = rowFile
        let newName = this.generatorName(name)
        newNames[i] = newName
      }
      if (!this.beforeUploadFiles(rowFiles, newNames)) { return false }
      for (let i = 0; i < rowFiles.length; i++) {
        let rowFile = rowFiles[i]
        let formData = new FormData();
        formData.append(this.name, rowFile)
        this.doUploadFiles(formData, (response) => {
          let url = this.parseReponse(response)
          this.afterUploadFiles(newNames[i], url)
        }, (xhr) => {
          this.uploadFileError(xhr, newNames[i])
        })
      }
    },
    beforeUploadFiles(rowFiles, newNames) {
      rowFiles = Array.from(rowFiles)
      for (let i = 0; i < rowFiles.length; i++) {
        let rowFile = rowFiles[i]
        let { size, type } = rowFile
        if (size > this.sizeLimit) {
          this.$emit('error', '文件过大了哦！')
          return false
        }
      }
      let tempFiles = rowFiles.map((rowFile, index) => {
        let { size, type } = rowFile
        return { name: newNames[index], size, type, status: 'uploading' }
      })
      this.$emit('update:fileList', [...this.fileList, ...tempFiles])
      return true
    },
    afterUploadFiles(name, url) {
      let file = this.fileList.filter(f => f.name === name)[0]
      let index = this.fileList.indexOf(file)
      let copyFile = { ...file }
      copyFile.url = url
      copyFile.status = 'success'
      let copyFileList = [...this.fileList]
      copyFileList.splice(index, 1, copyFile)
      this.$emit('update:fileList', copyFileList)
      this.$emit('addFile', copyFile)
    },
    uploadFileError(xhr, newName) {
      let file = this.fileList.filter(f => f.name === newName)[0]
      let index = this.fileList.indexOf(file)
      let copyFile = { ...file }
      copyFile.status = 'fail'
      let copyFileList = [...this.fileList]
      copyFileList.splice(index, 1, copyFile)
      this.$emit('update:fileList', copyFileList)
      let error
      if (xhr.status === 0) {
        error = '网络无法连接'
      }
      this.$emit('error', error)
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
    doUploadFiles(formData, successFn, errorFn) {
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        successFn(xhr.response)
      }
      xhr.onerror = () => {
        errorFn(xhr)
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
@import "var";
.g-uploader {
  &-preview-list {
    list-style: none;
    >li {
      display: flex;
      align-items: center;
      border: 1px solid darken($gray, 10%);
      margin: 8px 0;
    }
  }
  &-defaultImage,
  &-preview {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  &-preview {
    border: none;
  }
  &-name {
    margin-right: auto;
  }
  &-remove {
    width: 32px;
    height: 32px;
  }
  &-spin {
    width: 32px;
    height: 32px;
    @include spin;
  }
}
</style>