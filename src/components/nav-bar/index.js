import { Icon, Input } from '@/components/select'
import { NavBar, Button } from 'react-vant'
import React from 'react'

const attr = [
  {
    title: '左侧文本',
    type: 'leftText',
    com: 'input'
  },
  {
    title: '右侧图标',
    type: 'rightText',
    com: 'icon'
  }
]
let show = false

export default props => {
  const { property, leftText, rightText } = props || {}
  return (
    <>
      {property ? (
        <div>
          <div className='property'>
            <span className='attribute-name'>左侧文本:</span>
            <input type='text' />
          </div>
          <div className='property'>
            <span className='attribute-name'>右侧图标:</span>
            <Button
              type='default'
              plain
              hairline
              onClick={() => {
                show = true
              }}>
              修改图标
            </Button>
          </div>
        </div>
      ) : (
        <NavBar title='标题' leftText={leftText} rightText={rightText} />
      )}
    </>
  )
}
