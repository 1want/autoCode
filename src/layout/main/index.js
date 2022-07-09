import { View } from './style'

const copy = () => {
  alert('请选择导出方式')
}

const App = () => (
  <View>
    <p className='operation'>
      <span onClick={copy}>copy</span>
      <span>clear</span>
    </p>
    <div className='view-list'></div>
  </View>
)

export default App
