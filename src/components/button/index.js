import store from '@/store'
import { Button } from 'antd-mobile'

const state = {
  type: ['success', 'primary', 'danger', 'default']
}

const App = props => {
  const { property, type, comName } = props || {}
  return (
    <div>
      {property ? (
        <div className='property'>
          <div>
            <p>
              属性选择:
              <select
                value={type}
                onChange={e => store.modifyStyle('type', e.target.value)}>
                {state.type.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
      ) : (
        <Button color={type} className='btn'>
          btn
        </Button>
      )}
    </div>
  )
}

export default App
