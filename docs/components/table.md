---
title: 'Table 表单'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
<table-demo-1/>
</ClientOnly>

### 使用方式

### API

| 参数           |           说明           |    类型 | 默认值 | 可选值 |
| -------------- | :----------------------: | ------: | -----: | -----: |
| dataSource     |      显示的表格数据      |   Array |     —— |     —— |
| height         | 表格高度，默认为自动高度 |  Number |     —— |     —— |
| selectedItems  |       当前选中记录       |   Array |     —— |     —— |
| orderBy        |       设置排序规则       |  Object |     —— |     —— |
| loading        |      是否显示加载中      | Boolean |  false |   true |
| checkable      |     是否显示半选样式     | Boolean |  false |   true |
| numberVisiable |       是否展示行号       | Boolean |   true |  false |
| border         |      是否展示外边框      | Boolean |   true |  false |
| striped        |    是否为斑马纹 table    | Boolean |   true |  false |
| compact        |     表格大小是否紧凑     | Boolean |  false |   true |
| expandField    |      指定展开列属性      |  String |     —— |     —— |

### Events

| 事件名称             |             说明             |         回调参数 |
| -------------------- | :--------------------------: | ---------------: |
| update:selectedItems | 点击数据行的 Checkbox 时触发 |   当前选中行数据 |
| update:orderBy       |   点击排序条件指示器时触发   | 当前属性排序规则 |

::: tip

- 表格高度默认是自适应，当需要固定表头时，需设置 height
- 排序规则 orderBy 设置格式

    ```
    {[列表属性key]: 'desc' || 'asc'}
    ```
    考虑到手机端，多次点击时排序交互为升序-降序-无序(保持上次一排序)

+ 为了列与列之间更好的保持对齐，可手动设置每一列的宽度，最后一列可不设（自适应）
:::
