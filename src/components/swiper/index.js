import { Swiper } from 'react-vant'
import { AttrList } from '@/components/select'

const attr = [
  {
    title: '循环间隔',
    type: 'duration',
    com: 'input'
  },
  {
    title: '开启循环',
    type: 'loop',
    com: 'radio'
  }
]

const colors = ['blue', 'red']
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className='swiper-content' style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

export default props => {
  const { property, loop, duration } = props || {}
  return (
    <>
      {property ? (
        AttrList(attr, props)
      ) : (
        <Swiper loop={loop} autoplay={duration}>
          {items}
        </Swiper>
      )}
    </>
  )
}
