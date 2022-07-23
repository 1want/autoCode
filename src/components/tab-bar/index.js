import { Radios } from '@/components/select'
import store from '@/store'
import { Tabbar } from 'react-vant'

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: ''
  },
  {
    key: 'todo',
    title: '我的待办',
    icon: ''
  },
  {
    key: 'message',
    title: '我的消息',
    icon: ''
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: ''
  }
]
const items = tabs.map(item => (
  <Tabbar.Item key={item.key} title={item.title} />
))

const Types = ({ duration, autoplay }) => {
  return (
    <>
      <div className='property'>
        循环间隔:
        <input
          type='text'
          value={duration}
          onChange={e => store.modifyStyle('duration', e.target.value)}
        />
      </div>
      <div className='property'>
        自动循环:
        <Radios {...{ type: 'autoplay', value: autoplay }}></Radios>
      </div>
      <div className='property'>上传图片</div>
    </>
  )
}

export default props => {
  const { property, autoplay, duration } = props || {}
  return <>{property ? <Types {...props}></Types> : <Tabbar>{items}</Tabbar>}</>
}
