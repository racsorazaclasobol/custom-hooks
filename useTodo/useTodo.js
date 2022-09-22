import { useReducer, useEffect } from "react";
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const initialState = [];

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

  
    const handleNewTodo = (newTodo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }

        dispatch( action );

    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })

        // dispatch( action );
    }

    const handleToggleTodo = (id) => {     
        // console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })

    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos )) //Almacena los datos en el Almacenamiento Local integrado en los navegadores
      }, [todos]) 

      const todosCount = todos.length;
      const pendingTodosCount = todos.filter(todo => !todo.done).length;
  
    
    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,

    }
}
