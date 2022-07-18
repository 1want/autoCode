import store from '@/store'
import { Button } from 'antd-mobile'

const Types = props => {
  const { type, size } = props.attr
  const color = ['success', 'primary', 'danger', 'default']
  const sizes = ['mini', 'normal', 'large']

  const Select = ({ arr, style, value }) => {
    return (
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
  }

  return (
    <div>
      <p>
        颜色选择:
        <Select {...{ arr: color, style: 'type', value: type }}></Select>
      </p>
      <p>
        尺寸选择:
        <Select {...{ arr: sizes, style: 'size', value: size }}></Select>
      </p>
    </div>
  )
}

export default props => {
  const { property, type, size } = props || {}
  return (
    <>
      {property ? (
        <Types attr={props}></Types>
      ) : (
        <Button color={type} size={size} className='btn'>
          btn
        </Button>
      )}
    </>
  )
}
