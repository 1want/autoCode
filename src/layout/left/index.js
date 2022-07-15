import module from '@/utils/local-data.js'
import { Button } from 'antd-mobile'
import { ButtonStyle } from './style'

import { observer } from 'mobx-react'
import store from '@/store'

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
            onClick={() => store.addComponent(module[item], item)}>
            {module[item].comName}
          </Button>
        )
      })}
    </ButtonStyle>
  )
}

export default observer(App)
