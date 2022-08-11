import { AttrList } from '@/components/select'
import { Button } from 'react-vant'

const attr = [
  {
    title: '颜色选择',
    arr: ['success', 'primary', 'danger', 'default'],
    type: 'type',
    com: 'select'
  },
  {
    title: '尺寸选择',
    arr: ['mini', 'normal', 'large'],
    type: 'size',
    com: 'select'
  },
  {
    title: '是否禁用',
    type: 'disabled',
    com: 'radio'
  },
  {
    title: '朴素按钮',
    type: 'plain',
    com: 'radio'
  },
  {
    title: '细边框',
    type: 'hairline',
    com: 'radio'
  }
]

const Button = props => {
  const { property, type, size, disabled, plain, hairline } = props || {}

  return (
    <>
      {property ? (
        AttrList(attr, props)
      ) : (
        <Button
          plain={plain}
          hairline={hairline}
          type={type}
          size={size}
          disabled={disabled}>
          按钮
        </Button>
      )}
    </>
  )
}
export default Button
