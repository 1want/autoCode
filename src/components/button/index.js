import store from '@/store'
import { Button } from 'antd-mobile'

const Types = props => {
  const { type, size } = props.attr
  const types = ['success', 'primary', 'danger', 'default']
  return (
    <p>
      属性选择:
      <select
        value={type}
        onChange={e => store.modifyStyle('type', e.target.value)}>
        {types.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </p>
  )
}

const App = props => {
  const { property, type, size } = props || {}
  return (
    <>
      {property ? (
        <Types attr={props}></Types>
      ) : (
        <Button color={type} className='btn'>
          btn
        </Button>
      )}
    </>
  )
}

export default App
