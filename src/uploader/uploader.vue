<template>
  <div class="g-upload-wrapper">
    <input type="file">
  </div>
</template>
<script>
export default{
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
      default: 3*1024*1024
    },
    fileList: {
      type: Array,
      default: ()=>[]
    },
    parseReponse: {
      type: Function,
      required: true
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>