const parseHtml = {
  button: item => {
    return `<${item.tag} type="${item.type}" size="${item.size}">按钮</${item.tag}>`
  },
  'van-row': item => {
    return `<${item.tag} justify="${item.justify}">
              <van-col span="6">span: 8</van-col>
              <van-col span="6">span: 8</van-col>
              <van-col span="6">span: 8</van-col>
            </${item.tag}>`
  },
  'van-field': item => {
    return `<${item.tag} 
              v-model="${item.bind}" 
              disabled="${item.disabled}" 
              type="${item.type}"
            >
            </${item.tag}>`
  },
  'van-search': item => {
    return `<${item.tag} background="${item.bgColor}" left-icon="${item.icon}"></${item.tag}>`
  },
  'van-swiper': item => {
    return `<${item.tag}>
              <van-swipe-item>1</van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
            </${item.tag}>`
  },
  'van-grid': item => {
    return `<${item.tag} :column-num="${item.columnNum}">
              <van-grid-item v-for="(item,index) of ${item.allNum}" 
              :key="index" 
              :icon="item.icon || photo-o" 
              :text="item.text || 文字" 
            />
            </${item.tag}>`
  },
  'van-tabbar': item => {
    return `<${item.tag}>
              <van-tabbar-item icon="home-o">标签</van-tabbar-item>
              <van-tabbar-item icon="search">标签</van-tabbar-item>
              <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
              <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
            </${item.tag}>`
  }
}

const parseJs = {
  'van-button': item => {
    return ''
  },
  'van-row': item => {
    return ''
  },
  'van-field': item => {
    return "const value = ref('')"
  },
  'van-search': item => {
    return ''
  },
  'van-swiper': item => {
    return ''
  }
}

function formatTag(item) {
  return parseHtml[item.tag](item)
}

export default formatTag
