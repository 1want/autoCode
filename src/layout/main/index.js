import store from '@/store'
import module from '@/utils/local-data'
import { observer } from 'mobx-react'
import { useState } from 'react'
import buildTemplate from '@/utils/generator'
import Clipboard from 'clipboard'
import { Toast } from 'antd-mobile'
import Ts from './c-page/index'

import { Wrapper } from './style'

const copy = () => {
  const tmp = buildTemplate(store.components)
  var clipboard = new Clipboard('#copyTmp', {
    text: () => tmp
  })
  clipboard.on('success', () => {
    Toast.show({
      content: '复制成功',
      duration: 1500
    })
    clipboard.destroy()
  })
}

const App = () => {
  const [show, setShow] = useState(false)

  const isShow = bool => {
    setShow(bool)
  }
  return (
    <Wrapper>
      {show && <Ts isShow={isShow}></Ts>}
      <p className='operation'>
        <span onClick={() => copy()} id='copyTmp'>
          copy
        </span>
        <span onClick={() => store.clear()}>clear</span>
        <span onClick={() => setShow(true)}>set</span>
      </p>
      {/* 是否可用createElement改进这个地方 */}
      {/* {每次当有一个属性被更改时，所有组件都会被重新渲染一次，如何优化} */}
      <div className='view-list'>
        {store.components.map((item, index) => (
          <div onClick={() => store.chooseComponents(item)} key={index}>
            {module[item.tag].name(store.components[index])}
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default observer(App)
