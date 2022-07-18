import store from '@/store'
import { observer } from 'mobx-react'

import { Wrapper } from './style'
import React from 'react'

const App = () => {
  return (
    <Wrapper>
      <h4>组件名称: {store.comDetail.comName}</h4>
      {store.comDetail?.name &&
        store.comDetail.name({
          ...store.comDetail.attribute,
          property: 'property'
        })}
    </Wrapper>
  )
}

export default observer(App)
