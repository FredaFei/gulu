const path = require('path')
module.exports = {
  base: '/gulu/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{ text: 'Github', link: 'https://github.com/' }],
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/datePicker',
          '/components/toast',
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
