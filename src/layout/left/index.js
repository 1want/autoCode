import module from '@/utils/local-data.js'
import { Button } from 'react-vant'
import { ButtonStyle } from './style'

import { observer } from 'mobx-react'
import store from '@/store'

const App = () => {
  return (
    <ButtonStyle>
      {Object.keys(module).map(item => {
        return (
          <Button
            type='primary'
            plain
            hairline
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
