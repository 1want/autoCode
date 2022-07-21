import { Radios } from '@/components/select'
import store from '@/store'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />
  },
  {
    key: 'todo',
    title: '我的待办',
    icon: <UnorderedListOutline />
  },
  {
    key: 'message',
    title: '我的消息',
    icon: <AppOutline />
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: <UserOutline />
  }
]
const items = tabs.map(item => (
  <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
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
  return <>{property ? <Types {...props}></Types> : <TabBar>{items}</TabBar>}</>
}
