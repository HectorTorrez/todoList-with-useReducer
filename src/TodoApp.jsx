import { TodoAdd, TodoList } from "./components"
import { useTodo } from "./hook"

// const initialState = [
//     // {
//     //     id: new Date().getTime(),
//     //     description: 'Recolectar la piedra del alma',
//     //     done: false,
//     // },

// ]

    

export const TodoApp = () => {

    const { todos,
        onNewTodo,
        onDeleteTodo,
        handleToggleTodo,
        pedingTodosCount,
        todosCount
    } = useTodo([])
    
    

  return (
    <div className="d-flex flex-column row justify-content-md-center container-app  ">
        <h1>TodoApp: ({todosCount() || 0}) <small>Pendiente:({ pedingTodosCount() || 0 })</small></h1>
        <hr />

        <div className="row">
            <div className="col">
                <TodoList 
                todos = { todos }
                 handleDeleteTodo = { onDeleteTodo } 
                 onToggleTodo= { handleToggleTodo }
                />

            </div>

            <div className="col">
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd onNewValue={ onNewTodo }/>
            </div>
        </div>

    </div>
  )
}
