import store from '@/store'
import { observer } from 'mobx-react'
import buildTemplate from '@/utils/generator'
import Clipboard from 'clipboard'
import { Toast } from 'react-vant'

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
  const component = store.components.map((item, index) => (
    <div onClick={() => store.chooseComponents(item)} key={index}>
      <item.name {...store.components[index].attribute} />
    </div>
  ))

  return (
    <Wrapper>
      <p className='operation'>
        <span data-text='复制代码' onClick={copy} id='copyTmp'>
          copy
        </span>
        <span data-text='清空视图' onClick={() => store.clear()}>
          clear
        </span>
      </p>
      <div className='view-list'>{component}</div>
    </Wrapper>
  )
}

export default observer(App)
