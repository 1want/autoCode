import store from '@/store'
import module from '@/utils/local-data'

import { observer } from 'mobx-react'
import React from 'react'
import { Wrapper } from './style'

const App = () => (
  <Wrapper>
    <p className='operation'>
      <span>copy</span>
      <span>clear</span>
    </p>
    {/* 是否可用createElement改进这个地方 */}
    <div className='view-list'>
      {store.components.map((item, index) => (
        <div onClick={() => store.chooseComponents(item)} key={index}>
          {module[item.tag].name()}
        </div>
      ))}
    </div>
  </Wrapper>
)

export default observer(App)
