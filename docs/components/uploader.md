---
title: 'Uploader 上传'
sidebarDepth: 2
---

<ClientOnly>
  <uploader-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div>
    <p class="error">上传的文件最大尺寸不超过3MB</p>
    <am-uploader
      name="files"
      action="http://127.0.0.1:3000/upload"
      :file-list.sync="fileList"
      :size-limit="3 * 1024 * 1024"
      :parse-reponse="parseReponse"
      @error="error = $event"
      accept="image/png"
    >
      <am-button icon="upload">上传文件</am-button>
    </am-uploader>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      fileList: [],
      error: ''
    }
  },
  methods: {
    parseReponse(data) {
      let { id } = JSON.parse(data)
      return `http://127.0.0.1:3000/preview/${id}`
    }
  }
}
```

### API

| 参数         |             说明             |     类型 | 默认值 |       可选值 |
| ------------ | :--------------------------: | -------: | -----: | -----------: |
| name         | 发到后台的文件参数名（必须） |        - |      - |            - |
| action       |      上传的地址（必须）      |   String |      - |            - |
| method       |          请求的方式          |   String |   post | restfull API |
| accept       |      接受上传的文件类型      |   String |      - |            - |
| sizeLimit    |        接受的文件尺寸        |   Number |      - |            - |
| fileList     |  已经上传的文件列表（必须）  |    Array |      - |            - |
| parseReponse |   返回上传参数的方法(必须)   | Function |      - |            - |
| error        |      上传文件失败的钩子      | Function |      - |            - |
