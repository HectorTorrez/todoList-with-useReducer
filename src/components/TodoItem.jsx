export const TodoItem = ({todo = [], handleDeleteTodo, onToggleTodo }) => {
  return (
    <li key={ todo.id} className="list-group-item d-flex justify-content-between">
        <span 
        className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={ () => onToggleTodo( todo.id )}
        >
          { todo.description }
          </span>
        <button onClick={ () => handleDeleteTodo( todo.id) } className="btn btn-danger">Delete</button>
    </li>
  )
}
