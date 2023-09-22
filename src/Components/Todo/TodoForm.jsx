export default function TodoForm(props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (e.target.task.value !== '') {
        props.updateList({
          text: e.target.task.value,
          done: false,
          id: new Date().valueOf()
        })
        e.target.task.value = ''
      }
    }}>
      <input type="text" id="task" name="task" />
      <button type="submit">Add</button>
    </form>
  )
}