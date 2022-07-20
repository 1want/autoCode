import { Select, Radios } from '@/components/select'
import { Button } from 'antd-mobile'

const Types = ({ color, size, disabled }) => {
  const colorArr = ['success', 'primary', 'danger', 'default']
  const sizeArr = ['mini', 'normal', 'large']
  return (
    <>
      <div className='property'>
        <span>颜色选择:</span>
        <Select {...{ arr: colorArr, style: 'color', value: color }}></Select>
      </div>
      <div className='property'>
        <span>尺寸选择:</span>
        <Select {...{ arr: sizeArr, style: 'size', value: size }}></Select>
      </div>
      <div className='property'>
        <span>是否禁用:</span>
        <Radios {...{ type: 'disabled', value: disabled }}></Radios>
      </div>
    </>
  )
}

export default props => {
  const { property, color, size, disabled } = props || {}
  return (
    <>
      {property ? (
        <Types {...props}></Types>
      ) : (
        <Button color={color} size={size} disabled={disabled} className='btn'>
          按钮
        </Button>
      )}
    </>
  )
}
