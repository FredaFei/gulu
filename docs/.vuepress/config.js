const path = require('path')
module.exports = {
  base: '/gelu/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/get-started' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
        ]
      },
    ]
  },
  scss: {
    includePaths: [path.join(__dirname,'../../style')]
  }
}