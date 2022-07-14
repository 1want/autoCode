import store from '@/store'
import { Button } from 'antd-mobile'

const App = props => {
  const { property } = props || {}
  return (
    <div>
      {!property ? (
        <Button value='default' className='btn'>
          btn
        </Button>
      ) : (
        <div>
          <p onClick={() => store.modifyStyle('type', 'success')}>success</p>
          <p>danger</p>
          <p>primary</p>
        </div>
      )}
    </div>
  )
}

export default App
