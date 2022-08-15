import * as styles from '../template/style'

function formatTag(ele) {
  //给元素添加对应的属性
  const addAttr = (dom, ele) => {
    if (ele.attribute) {
      for (var key in ele.attribute) {
        dom.setAttribute(key, ele.attribute[key])
      }
    }
  }

  if (ele.tmp) {
    return ele.tmp(ele.attribute)
  } else {
    const box = document.createElement('div')
    const dom = document.createElement(ele.tag)
    ele.className && (dom.className = ele.className)
    dom.innerText = ele.text || ''
    addAttr(dom, ele)
    box.appendChild(dom)
    return box.innerHTML
  }
}

function createState(ele) {
  if (!ele.state) return ''
  for (var [k, v] of Object.entries(ele.state)) {
    return { k, v }
  }
}

function addStyle(ele) {
  if (!ele.style) return ''
  return styles[ele.style]
}

export { formatTag, createState, addStyle }
