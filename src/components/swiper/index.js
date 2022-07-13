import { Swiper } from 'antd-mobile'
import { Style } from './style'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className='swiper-content' style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

const App = () => (
  <Style>
    <Swiper autoplay>{items}</Swiper>
  </Style>
)

export default App
