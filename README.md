[English](./README.en.md) | 中文

### 简介

可视化创建 h5 页面,生成对应代码

### 代码运行流程

1. 点击左侧组件，组件被添加到 hooks 中的 components 中，每个组件都有自己的 id 已方便后续查找到该组件
2. 组件被添加到中间视图部分后，可以点击组件进行属性编辑
3. 组件被点击后会添加到 hooks 中的 comDetail 用来右侧编辑，因为组件已经通过 id 查找后引用的是同一个组件，所以对 comDetail 内容进行编辑时，components 中的具体组件也会被改变
4. 所有组件都有自己对应的转换成具体标签的部分
5. 根据 components 中的内容生成模板
6. 使用 prettier 对转换后的模板进行格式化