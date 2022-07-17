import store from '@/store'

const parseHtml = {
  button: (item, tag) => {
    return `<${tag} type="${item.type}" size="${item.size}">按钮</${tag}>`
  },
  row: item => {
    return `<${item.tag} justify="${item.justify}">
              <van-col span="6">span: 8</van-col>
              <van-col span="6">span: 8</van-col>
              <van-col span="6">span: 8</van-col>
            </${item.tag}>`
  },
  field: item => {
    return `<${item.tag} 
              v-model="${item.bind}" 
              disabled="${item.disabled}" 
              type="${item.type}"
            >
            </${item.tag}>`
  },
  search: item => {
    return `<${item.tag} background="${item.bgColor}" left-icon="${item.icon}"></${item.tag}>`
  },
  swiper: item => {
    return `<${item.tag}>
              <van-swipe-item>1</van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
            </${item.tag}>`
  },
  grid: item => {
    return `<${item.tag} :column-num="${item.columnNum}">
              <van-grid-item v-for="(item,index) of ${item.allNum}" 
              :key="index" 
              :icon="item.icon || photo-o" 
              :text="item.text || 文字" 
            />
            </${item.tag}>`
  },
  tabbar: item => {
    return `<${item.tag}>
              <van-tabbar-item icon="home-o">标签</van-tabbar-item>
              <van-tabbar-item icon="search">标签</van-tabbar-item>
              <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
              <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
            </${item.tag}>`
  }
}

const ui = {
  van: {
    button: 'van-button'
  },
  antd: {
    button: 'Button'
  }
}

function formatTag(item) {
  if (store.ui === 'van' || store.ui === 'antd') {
    return parseHtml[item.tag](item, ui[store.ui][item.tag])
  }
  return parseHtml[item.tag](item, store.ui)
}

export default formatTag
