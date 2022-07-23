/**
 * Select 作用: 当组件属性被编辑时，需要有选择的属性可以使用此组件
 * arr: Array 需要被选择的数据参数
 * style: String 当属性被选择完后，需要修改对应组件的哪条属性
 * value: String 当属性被选择完后，通过父级参数传递过来的值
 *
 */
import store from '@/store'
import { Radio } from 'react-vant'

export const Select = ({ arr, style, value }) => (
  <select
    value={value}
    onChange={e => store.modifyStyle(style, e.target.value)}>
    {arr.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
)

export const Radios = ({ type, value }) => {
  return (
    <Radio.Group
      direction='horizontal'
      value={value}
      onChange={val => {
        store.modifyStyle(type, val)
      }}>
      <Radio name={true}>是</Radio>
      <Radio name={false}>否</Radio>
    </Radio.Group>
  )
}
