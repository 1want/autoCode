/**
 * 代码生成流程
 * 1.对每个组件进行解析，转换成对应vue标签
 * 2.将所有dom内容使用字符串拼接起来
 * 3.使用prettier对拼接好后的代码进行格式化
 */

import { formatTag, createState, addStyle } from './format.js'
import parserHtml from 'prettier/parser-html'
import parserBabel from 'prettier/parser-babel'
import prettier from 'prettier/standalone'

function vueTemplate(str) {
  return `
  <template>
    ${str}
  </template>
`
}

function scriptTemplate(state) {
  return `
  <script setup>
  const state = reactive(${state})

  return {
    ...toRefs(state)
  }
  </script>
`
}

function styleTemplate(css) {
  return `
  <style lang="less" scoped>
    ${css}
  </style>
`
}

function parseComponents(arr) {
  let domTmp = ''
  let scriptTmp = {}
  let styleTmp = ''

  arr.forEach(item => {
    const tmp = formatTag(item)
    const { k, v } = createState(item)
    const style = addStyle(item)

    domTmp += tmp
    domTmp += '\n'
    scriptTmp[k] = v
    styleTmp += style
  })
  return { domTmp, scriptTmp, styleTmp }
}

function buildTemplate(components) {
  const { domTmp, scriptTmp, styleTmp } = parseComponents(components)
  let dom = vueTemplate(domTmp)
  let script = scriptTemplate(JSON.stringify(scriptTmp))
  let css = styleTemplate(styleTmp)
  const formatTmp = prettier.format(dom + script + css, {
    parser: 'vue',
    plugins: [parserHtml, parserBabel],
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid'
  })

  return formatTmp
}

export default buildTemplate
