import { AttrList } from '@/components/select'
import { Button } from 'react-vant'

const colorArr = ['success', 'primary', 'danger', 'default']
const sizeArr = ['mini', 'normal', 'large']

const _attr = [
  {
    title: '颜色选择',
    arr: colorArr,
    type: 'type'
  },
  {
    title: '尺寸选择',
    arr: sizeArr,
    type: 'size'
  },
  {
    title: '是否禁用',
    type: 'disabled'
  },
  {
    title: '朴素按钮',
    type: 'plain'
  },
  {
    title: '细边框',
    type: 'hairline'
  }
]

export default props => {
  const { property, type, size, disabled, plain, hairline } = props || {}

  return (
    <>
      {property ? (
        AttrList(_attr, { type, size, disabled, plain, hairline })
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
