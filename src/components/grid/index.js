import store from '@/store'

const Grid = (column, allNum) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gridGap: '10px',
        textAlign: 'center'
      }}>
      {Array(allNum)
        .fill('undefined')
        .map((item, index) => (
          <div key={index}>
            <span>icon</span>
            <div className='text'>内容</div>
          </div>
        ))}
    </div>
  )
}

const Types = ({ column, allNum }) => {
  return (
    <>
      <div className='property'>
        列数:
        <input
          type='number'
          value={column}
          onChange={e => store.modifyStyle('column', Number(e.target.value))}
        />
      </div>
      <div className='property'>
        总数:
        <input
          type='number'
          value={allNum}
          onChange={e => store.modifyStyle('allNum', Number(e.target.value))}
        />
      </div>
    </>
  )
}

export default props => {
  const { property, column, allNum } = props || {}
  return <>{property ? <Types {...props}></Types> : Grid(column, allNum)}</>
}
