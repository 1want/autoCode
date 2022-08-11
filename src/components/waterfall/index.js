import { AttrList } from '@/components/select'
import './index.css'

const imgs = [
  'https://img2.baidu.com/it/u=3696512662,1685540983&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
  'https://img2.baidu.com/it/u=3803145640,3196135209&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
  'https://img1.baidu.com/it/u=356532203,1702239014&fm=253&fmt=auto&app=138&f=JPEG?w=331&h=500',
  'https://img0.baidu.com/it/u=622020107,4198730873&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
  'https://img1.baidu.com/it/u=165862906,828924803&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
  'https://img1.baidu.com/it/u=3003020177,2948003422&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
]
const attr = [
  {
    title: '列数',
    type: 'column',
    com: 'input'
  }
]

const Items = imgs.map(item => (
  <div className='content' key={item}>
    <img src={item} alt='' />
    <span>hello</span>
  </div>
))

const Waterfall = props => {
  const { property, column } = props || {}
  return property ? (
    AttrList(attr, props)
  ) : (
    <div className='waterfall-wrapper' style={{ columnCount: column }}>
      {Items}
    </div>
  )
}

export default Waterfall
