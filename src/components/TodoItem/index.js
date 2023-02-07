// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-iem">
      <p>{title}</p>
      <button type="button" className="button1" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
