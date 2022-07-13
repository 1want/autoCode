import module from '@/utils/local-data.js'
import { Button } from 'antd-mobile'
import { ButtonStyle } from './style'

import { observer } from 'mobx-react'
import store from '@/store'

const f = item => {
  const obj = {}
  for (var i in item) {
    if (i !== 'name') {
      obj[i] = item[i]
    }
  }
  return obj
}

const App = () => {
  return (
    <ButtonStyle>
      {Object.keys(module).map(item => {
        return (
          <Button
            color='primary'
            fill='outline'
            key={item}
            className='btn'
            onClick={() => store.addComponent(f(module[item]), item)}>
            {module[item].comName}
          </Button>
        )
      })}
    </ButtonStyle>
  )
}

export default observer(App)
