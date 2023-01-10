import { useEffect, useReducer } from "react"
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}



export const useTodo = () => {
    const [todos, dispatchTodo ] = useReducer( todoReducer, [], init )
    
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || [] );
    }, [todos])
    
    const pedingTodosCount = () => {
        return todos.filter(todo => !todo.done).length
    }

    const todosCount = () => {
        return todos.length
    }

    const onNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            playload: todo,
        }
        dispatchTodo( action );
    }

    const onDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            playload: id,
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            playload: id,
        })
    }


  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    handleToggleTodo,
    pedingTodosCount,
    todosCount,
  }
}
