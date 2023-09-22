
function removeTodoItem(props, id) {
  return () => {
    const newList = props.list.filter((item) => item.id !== id)
    props.updateList(newList)
  }
}

function toggleDone(props, id) {
  return () => {
    const newList = props.list.map((item) =>
      item.id === id
        ? { ...item, done: !item.done }
        : item
    )
    props.updateList(newList)
  }
}

export default function TodoList (props) {
  const { list } = props
  return (
    <ul>
      {
        list.map((item) => (
          <li className={item.done ? 'done' : ''} key={`todo-list-${item.id}`}>
            <input
              onChange={toggleDone(props, item.id)}
              type="checkbox"
              checked={item.done} />
            <span>
              { item.text }
            </span>
            <button
              onClick={removeTodoItem(props, item.id)}
            >X</button>
          </li>
        ))
      }
    </ul>
  )
}