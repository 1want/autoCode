import { AttrList } from '@/components/select'
import { NavBar } from 'react-vant'
import React from 'react'
import { Search } from '@react-vant/icons'

const attr = [
  {
    title: '左侧文本',
    type: 'leftText',
    com: 'input'
  }
]

const MyNavBar = props => {
  const { property, leftText } = props || {}
  return (
    <>
      {property ? (
        AttrList(attr, props)
      ) : (
        <NavBar
          title='标题'
          leftText={leftText}
          rightText={<Search fontSize={20} />}
        />
      )}
    </>
  )
}

export default MyNavBar
