import { Swiper } from 'react-vant'
import { Radios } from '@/components/select'
import store from '@/store'

import { Style } from './style'

const colors = ['blue', 'red']
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className='swiper-content' style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

const Types = ({ duration, autoplay }) => {
  return (
    <>
      <div className='property'>
        循环间隔:
        <input
          type='text'
          value={duration}
          onChange={e => store.modifyStyle('duration', e.target.value)}
        />
      </div>
      <div className='property'>
        自动循环:
        <Radios {...{ type: 'autoplay', value: autoplay }}></Radios>
      </div>
      <div className='property'>上传图片</div>
    </>
  )
}

export default props => {
  const { property, autoplay, duration } = props || {}
  return (
    <>
      {property ? (
        <Types {...props}></Types>
      ) : (
        <Style>
          <Swiper loop autoplay={autoplay} autoplayInterval={duration}>
            {items}
          </Swiper>
        </Style>
      )}
    </>
  )
}
