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
        <span data-text='复制代码' onClick={copy} id='copyTmp'>
          copy
        </span>
        <span data-text='清空视图' onClick={() => store.clear()}>
          clear
        </span>
        <span data-text='设置' onClick={() => setShow(true)}>
          set
        </span>
      </p>
      <div className='view-list'>
        {store.components.map((item, index) => (
          <div onClick={() => store.chooseComponents(item)} key={index}>
            {module[item.tag].name(store.components[index].attribute)}
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default observer(App)
