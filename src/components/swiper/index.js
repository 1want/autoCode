import { Swiper } from 'react-vant'
import { AttrList } from '@/components/select'

const attr = [
  {
    title: '循环间隔',
    type: 'duration',
    com: 'input'
  }
]

const colors = ['blue', 'red']
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className='swiper-content' style={{ background: color }}></div>
  </Swiper.Item>
))

export default props => {
  const { property, duration } = props || {}
  return (
    <>
      {property ? (
        AttrList(attr, props)
      ) : (
        <Swiper loop autoplay={duration}>
          {items}
        </Swiper>
      )}
    </>
  )
}
