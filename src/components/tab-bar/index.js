import { Tabbar } from 'react-vant'
import { AttrList } from '../select'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

const attr = []

const MyTabBar = props => {
  const { property } = props || {}
  return (
    <>
      {property ? (
        AttrList(attr, props)
      ) : (
        <Tabbar>
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      )}
    </>
  )
}

export default MyTabBar
