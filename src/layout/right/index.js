import store from '@/store'
import { observer } from 'mobx-react'

import { Wrapper } from './style'
import { types } from '@/components/property'

const App = () => {
  return (
    <Wrapper>
      <h4>组件名称: {store.comDetail.comName}</h4>
      {/* {store.comDetail.map(item => {
        item.types
      })} */}
      {/* {store.comDetail?.name &&
        store.comDetail.name({ ...store.comDetail, property: 'property' })} */}
    </Wrapper>
  )
}

export default observer(App)
