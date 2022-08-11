import { Grid } from 'react-vant'
import { WapHomeO } from '@react-vant/icons'
import { AttrList } from '../select'

const attr = [
  {
    title: '列数',
    type: 'column',
    com: 'input'
  },
  {
    title: '总数',
    type: 'allNum',
    com: 'input'
  }
]

const MyGrid = props => {
  const { property, column, allNum } = props || {}
  return (
    <>
      {property ? (
        AttrList(attr, props)
      ) : (
        <Grid columnNum={column}>
          {Array.from({ length: allNum }, (_, i) => (
            <Grid.Item key={i} icon={<WapHomeO />} text='文字' />
          ))}
        </Grid>
      )}
    </>
  )
}

export default MyGrid
