import Left from '@/layout/left'
import Main from '@/layout/main'
import Right from '@/layout/right'
import { AppStyle } from '@/assets/css/AppStyle.js'

function App() {
  return (
    <AppStyle>
      <div className='left'>
        <Left></Left>
      </div>
      <div className='main'>
        <Main></Main>
      </div>
      <div className='right'>
        <Right></Right>
      </div>
    </AppStyle>
  )
}

export default App
