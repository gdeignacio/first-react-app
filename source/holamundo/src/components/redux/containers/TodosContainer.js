import { connect } from 'react-redux';

// Importamos nuestro componente TodoList
// Lo usaremos para CONECTARLO CON EL STORE DE REDUX
// así éste podrá leer los datos del store y además,
// gestionar los eventos de click para despachar la acción de
// actualizar el estado del Todo
import TodoList from '../components/TodoList';

// Importamos la función para generar una acción de tipo 'TOGGLE_TODO'
import { toggleTodo } from '../../../store/actions/actions';

/**
 * Función para filtrar la lista de Todos que se muestra en la vista
 * @param {array} todos 
 * La lista a Filtrar
 * @param {string} filter 
 * El filtro usado para devolver la lista filtrada
 */
const filterTodos = (todos, filter) => {

    console.log('FILTRO ACTUAL', filter);

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// Aquí asignamos la prop llamada 'todos' de TodoList a partir de los datos
// del estado 'todosState' del STORE de la aplicación
const mapStateToProps = (state) => {
    return {
        // Versión sin filtrar -> todos: state.todosState
        // Lista filtrada,
        todos: filterTodos(state.todosState, state.filterState)
    }
}

// Despacharemos la acción de tipo toggleTodo y se la asignaremos
// a la prop llamada 'onTodoClick' del componente TodoList
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            // Despacha la acción que actualiza el store
            dispatch(toggleTodo(id)); // LO QUE REALMENTE SE EJECUTA ES ESTO
        },
    }
}

// Conectamos los datos del State con los Props del TodoList
// También concetamos la función de despachar acciones con las props de TodoList
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;
