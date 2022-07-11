import module from '@/utils/local-data.js'
import { Button } from 'antd'
import { ButtonStyle } from './style'

import { observer } from 'mobx-react'
import store from '@/hooks'

function App() {
  return (
    <ButtonStyle>
      count: {store.amount}
      <button onClick={() => store.increment()}>add +1</button>
      {/* {Object.keys(module).map(item => {
        return (
          <Button value='default' key={item} className='btn'>
            {module[item].comName}
          </Button>
        )
      })} */}
    </ButtonStyle>
  )
}

export default observer(App)
