import { View } from './style'
import { useFn } from '@/hooks'

import { observer } from 'mobx-react'
import store from '@/hooks'

const App = () => (
  <View>
    <p>main</p>
    count: {store.amount}
    <p className='operation'>
      <span>copy</span>
      <span>clear</span>
    </p>
    <div className='view-list'></div>
  </View>
)

export default observer(App)
