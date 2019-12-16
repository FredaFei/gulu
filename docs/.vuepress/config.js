const path = require('path')
module.exports = {
  base: '/amazing-ui/',
  title: 'Hello Amazing UI',
  description: 'Just playing around',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{ text: 'Github', link: 'https://github.com/FredaFei/amazing-ui' }],
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/controllCount',
          '/components/input',
          '/components/radio',
          '/components/checkbox',
          '/components/select',
          '/components/form',
          '/components/datePicker',
          '/components/toast',
          '/components/message',
          '/components/collapse',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/slides',
          '/components/cascader',
          '/components/nav',
          '/components/pager',
          '/components/popover',
          '/components/uploader'
        ]
      }
    ]
  },
  scss: {
    includePaths: [path.join(__dirname, '../../style')]
  }
}
