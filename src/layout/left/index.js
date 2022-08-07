import module from '@/utils/local-data.js'
import { active } from '@/template'
import { Button } from 'react-vant'
import { observer } from 'mobx-react'
import store from '@/store'

import './style.css'

const com = Object.keys(module).map(item => {
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
})

const App = () => (
  <div className='content'>
    <p>组件</p>
    {com}
    {/* <p>模板</p>
    {active()} */}
  </div>
)

export default observer(App)
