import { Select, Radios } from '@/components/select'
import { Button } from 'react-vant'

const Types = ({ type, size, disabled, plain, hairline }) => {
  const colorArr = ['success', 'primary', 'danger', 'default']
  const sizeArr = ['mini', 'normal', 'large']
  return (
    <>
      <div className='property'>
        <span class='attribute-name'>颜色选择:</span>
        <Select {...{ arr: colorArr, style: 'color', value: type }}></Select>
      </div>
      <div className='property'>
        <span class='attribute-name'>尺寸选择:</span>
        <Select {...{ arr: sizeArr, style: 'size', value: size }}></Select>
      </div>
      <div className='property'>
        <span class='attribute-name'>是否禁用:</span>
        <Radios {...{ type: 'disabled', value: disabled }}></Radios>
      </div>
      <div className='property'>
        <span class='attribute-name'>朴素按钮:</span>
        <Radios {...{ type: 'plain', value: plain }}></Radios>
      </div>
      <div className='property'>
        <span class='attribute-name'>细边框:</span>
        <Radios {...{ type: 'hairline', value: hairline }}></Radios>
      </div>
    </>
  )
}

export default props => {
  const { property, type, size, disabled, plain, hairline } = props || {}
  return (
    <>
      {property ? (
        <Types {...props}></Types>
      ) : (
        <Button
          plain={plain}
          hairline={hairline}
          type={type}
          size={size}
          disabled={disabled}
          className='btn'>
          按钮
        </Button>
      )}
    </>
  )
}
