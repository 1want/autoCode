import store from '@/store'
import { observer } from 'mobx-react'

function App() {
  return (
    <div className='App'>
      {store.comDetail?.name &&
        store.comDetail.name({ ...store.comDetail, property: 'property' })}
    </div>
  )
}

export default observer(App)
