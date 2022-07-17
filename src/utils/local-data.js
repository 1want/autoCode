import Button from '@/components/button/index.js'
import Row from '@/components/row/index.js'
import Swiper from '@/components/swiper/index.js'
import Search from '@/components/search/index.js'
import Field from '@/components/field/index.js'
import Grid from '@/components/grid/index.js'
import TabBar from '@/components/tab-bar/index.js'

const modules = {
  button: {
    types: 'primary',
    name: Button,
    comName: '按钮',
    tag: 'button',
    size: 'normal'
  },
  row: {
    justify: 'center',
    name: Row,
    comName: '布局',
    tag: 'row'
  },
  field: {
    type: 'text',
    name: Field,
    comName: '输入框',
    tag: 'field',
    bind: '',
    disabled: false
  },
  search: {
    name: Search,
    comName: '搜索',
    tag: 'search',
    icon: 'search',
    bgColor: '#fff',
    bind: ''
  },
  swiper: {
    name: Swiper,
    comName: '轮播',
    tag: 'swiper'
  },
  grid: {
    name: Grid,
    comName: '宫格',
    tag: 'grid',
    columnNum: 3,
    allNum: 6
  },
  tabBar: {
    name: TabBar,
    comName: '标签栏',
    tag: 'tabbar',
    position: true
  }
}

export default modules
