import module from '@/utils/local-data.js'
import { Button } from 'antd'
import { ButtonStyle } from './style'

function App() {
  return (
    <ButtonStyle>
      {Object.keys(module).map(item => {
        return (
          <Button value='default' key={item} className='btn'>
            {module[item].comName}
          </Button>
        )
      })}
    </ButtonStyle>
  )
}

export default App
