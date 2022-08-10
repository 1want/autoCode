import { modules, layout } from '@/utils/local-data.js'
import { Button } from 'react-vant'
import { observer } from 'mobx-react'
import store from '@/store'

import './style.css'

const com = module =>
  Object.keys(module).map(item => {
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
  <div className='left-content'>
    <p>组件</p>
    {com(modules)}
    <p>布局</p>
    {com(layout)}
  </div>
)

export default observer(App)
