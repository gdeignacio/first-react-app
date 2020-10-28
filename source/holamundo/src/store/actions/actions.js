// Id Incremental para identificar las Tareas (Todos)
let nextTodoId = 0;


/**
 * Función genérica para devolver acciones de todo tipo
 * Factoría de acciones
 */
// export const actionGenerator = (type, payload) => {
//     return {type, payload}
// }



// Función para devolver una Acción de tipo ADD_TODO
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: nextTodoId ++,
            text
        }
    }
}


// Función para devolver una Acción de tipo TOGGLE_TODO
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            id
        }
    }
}


// Función para devolver una Acción de tipo SET_VISIBILITY_FILTER
export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
            filter
        }
    }
}
