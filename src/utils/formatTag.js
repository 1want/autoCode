//给元素添加对应的属性
const addAttr = (dom, ele) => {
  if (ele.attribute) {
    for (var key in ele.attribute) {
      dom.setAttribute(key, ele.attribute[key])
    }
  }
}

function formatTag(ele) {
  let dom
  if (ele.tmp) {
    dom = ele.tmp(ele.attribute)
  } else {
    dom = `<${ele.tag}>${ele.comName}</${ele.tag}>`
    // dom = document.createElement(ele.tag)
    // dom.className = ele.className
    // dom.innerText = ele.text || ''
    // addAttr(dom, ele)
  }
  return dom
}

export default formatTag
