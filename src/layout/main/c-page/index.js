import { useState } from 'react'
import { Radio, Button } from 'antd-mobile'
import store from '@/store'

import { Wrapper } from './style'

const App = props => {
  const { isShow } = props

  const [value, setValue] = useState('')
  const [uiValue, setUiValue] = useState('')

  const sure = () => {
    isShow(false, 'sure')
  }
  const cancel = () => {
    isShow(false)
  }

  return (
    <Wrapper>
      <h4>结合以下脚手架使用</h4>
      <Radio.Group
        value={value}
        onChange={val => {
          setValue(val)
          store.chooseUi('cli', val)
        }}>
        <Radio value='vue'>vue</Radio>
        <Radio value='react'>react</Radio>
        <Radio value=''>原生</Radio>
      </Radio.Group>
      <h4>结合以下UI库使用</h4>
      <Radio.Group
        value={uiValue}
        onChange={val => {
          setUiValue(val)
          store.chooseUi('ui', val)
        }}>
        <Radio value='van'>vant</Radio>
        <Radio value='ant'>antd-mobile</Radio>
        <Radio value=''>原生</Radio>
      </Radio.Group>
      <input
        type='text'
        placeholder='自定义组件前缀'
        onChange={e => store.chooseUi('ui', e.target.value)}
      />

      <div className='btn'>
        <Button onClick={() => sure()}>确定</Button>
        <Button onClick={() => cancel()}>取消</Button>
      </div>
    </Wrapper>
  )
}

export default App
