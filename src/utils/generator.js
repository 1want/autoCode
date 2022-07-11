/**
 * 代码生成流程
 * 1.对每个组件进行解析，转换成对应vue标签
 * 2.将所有dom内容使用字符串拼接起来
 * 3.使用prettier对拼接好后的代码进行格式化
 */

import formatTag from './formatTag.js'
import parserHtml from 'prettier/parser-html'
import parserBabel from 'prettier/parser-babel'
import prettier from 'prettier/standalone'

function vueTemplate(str) {
  return `<template>
      ${str}
  </template>`
}

function vueScript(str) {
  return `<script setup>
    ${str}
  </script>`
}

function cssStyle(str) {
  return `<style>
    ${str}
  </style>`
}

function parseComponents(arr) {
  let tmpString = ''
  arr.forEach(item => {
    const res = formatTag(item)
    tmpString += res
    tmpString += '\n'
  })
  return tmpString
}

function buildTemplate(components) {
  const com = parseComponents(components.value)

  let tmp = vueTemplate(com)

  const formatTmp = prettier.format(tmp, {
    parser: 'vue',
    plugins: [parserHtml, parserBabel],
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid'
    // jsxBracketSameLine: true
  })
  return formatTmp
}

export default buildTemplate
