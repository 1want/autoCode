import store from '@/store'
import module from '@/utils/local-data'
import { observer } from 'mobx-react'
import buildTemplate from '@/utils/generator'

import { Wrapper } from './style'

const copy = () => {
  const tmp = buildTemplate(store.components)
  console.log(tmp)
}

const App = () => {
  return (
    <Wrapper>
      <p className='operation'>
        <span onClick={() => copy()}>copy</span>
        <span onClick={() => store.clear()}>clear</span>
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
