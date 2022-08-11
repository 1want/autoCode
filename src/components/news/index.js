import './index.css'

const imgs = [
  'https://img2.baidu.com/it/u=3696512662,1685540983&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
  'https://img2.baidu.com/it/u=3803145640,3196135209&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
  'https://img1.baidu.com/it/u=356532203,1702239014&fm=253&fmt=auto&app=138&f=JPEG?w=331&h=500'
]

const Items = imgs.map(item => (
  <div className='content' key={item}>
    <img src={item} alt='' />
    <div className='info'>
      <div>这里是title</div>
      <span>我是info</span>
    </div>
  </div>
))

const MyNews = props => {
  const { property } = props
  return property ? '' : <div className='news-wrapper'>{Items}</div>
}

export default MyNews
