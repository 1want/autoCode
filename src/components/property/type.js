import store from '@/store'

const state = {
  type: ['success', 'primary', 'danger', 'default']
}
export const type = props => {
  const { type } = props
  return (
    <p>
      属性选择:
      <select
        value={type}
        onChange={e => store.modifyStyle('type', e.target.value)}>
        {state.type.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </p>
  )
}

export const size = () => {
  return <div>size</div>
}

export const position = () => {
  return 'position'
}
