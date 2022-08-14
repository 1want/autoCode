import Button from '@/components/button/index.js'
import Swiper from '@/components/swiper/index.js'
import Grid from '@/components/grid/index.js'
import TabBar from '@/components/tab-bar/index.js'
import NavBar from '@/components/nav-bar/index.js'
import waterfall from '@/components/waterfall/index.js'
import news from '@/components/news/index.js'
import listImg from '@/components/list-img/index.js'
import { waterfallTmp } from '@/template'

const modules = {
  button: {
    name: Button,
    comName: '按钮',
    tag: 'van-button',
    attribute: {
      size: 'normal',
      type: 'info',
      disabled: false,
      hairline: false,
      plain: false
    }
  },
  swiper: {
    name: Swiper,
    comName: '轮播',
    tag: 'van-swiper',
    attribute: {
      duration: 2000
    },
    state: {
      arr: [1, 2, 3]
    },
    childKey: 'swiper-item'
  },
  grid: {
    name: Grid,
    comName: '宫格',
    tag: 'van-grid',
    attribute: {
      column: 3,
      allNum: 6
    }
  },
  tabBar: {
    name: TabBar,
    comName: '标签栏',
    tag: 'van-tabBar',
    attribute: {
      size: 'normal',
      color: 'primary',
      disabled: false
    }
  },
  navBar: {
    name: NavBar,
    comName: '导航栏',
    tag: 'van-navBar',
    attribute: {
      leftText: 'primary'
    }
  }
}

const layout = {
  waterfall: {
    name: waterfall,
    comName: '瀑布流',
    tag: 'div',
    attribute: {
      column: 2
    },
    className: 'waterfall-wrapper',
    ...waterfallTmp
  },
  news: {
    name: news,
    comName: '信息',
    tag: 'div',
    className: 'news-wrapper',
    isFor: true,
    state: {
      arr: [1, 2, 3]
    },
    childKey: 'div'
  },
  list: {
    name: listImg,
    comName: '横向图片',
    tag: 'div',
    className: 'list-wrapper',
    isFor: true,
    state: {
      arr: [1, 2, 3]
    },
    childKey: 'div'
  }
}

export { modules, layout }
