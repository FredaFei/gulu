<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-button @click="open1">alert</am-button>
    <am-button @click="open2">confirm</am-button>
    <am-button @click="open3">自定义</am-button>
  </div>
</template>
<script>
  import Button from '../../../src/button/button';
  import Message from '../../../src/message/index';
  import Vue from 'vue';

  Vue.use(Message);
  export default {
    components: {
      AmButton: Button,
    },
    methods: {
      open1() {
        this.$alert('i am a alert! <a href="https://www.zhihu.com"> zhihu.com</a>', {title: 'test', enableHtml: true});
      },
      open2() {
        this.$confirm('i am a confirm!', {title: 'test'});
      },
      open3() {
        this.$alert('i am a alert!', {
          confirmButton: {
            text: '我知道了',
            callback(){
              alert('yes')
            }
          }
        });
      }
    }
  };
</script>
