/**
 * Select 作用: 当组件属性被编辑时，需要有选择的属性可以使用此组件
 * arr: Array 需要被选择的数据参数
 * style: String 当属性被选择完后，需要修改对应组件的哪条属性
 * value: String 当属性被选择完后，通过父级参数传递过来的值
 * com: Component 组件
 *
 */
import store from '@/store'
import { Radio } from 'react-vant'
import '../assets/css/select.css'

export const Select = ({ arr, type, value }) => (
  <select
    className='select'
    value={value}
    onChange={e => store.modifyStyle(type, e.target.value)}>
    {arr.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
)

export const Radios = ({ type, value }) => (
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

export const Input = ({ type, value }) => {
  const n = typeof value === 'number'
  return (
    <input
      type='text'
      value={value}
      onChange={e =>
        store.modifyStyle(type, n ? Number(e.target.value) : e.target.value)
      }
    />
  )
}

const com = {
  select: Select,
  radio: Radios,
  input: Input
}

export const AttrList = (attributes, props) => {
  return attributes.map(item => (
    <div className='property' key={item.title}>
      <span className='attribute-name'>{item.title}:</span>
      {com[item.com]({
        arr: item.arr,
        type: item.type,
        value: props[item.type]
      })}
    </div>
  ))
}
