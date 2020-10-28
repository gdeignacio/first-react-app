import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions/actions';

// Importamos el formulario de Todos
import TodoForm from '../components/TodoForm';

const mapStateToProps = (state) => ({
    
})

// Despacharemos la acción de tipo addTodo y se la asignaremos
// a la prop llamada 'submit' del componente TodoList
const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            // Despacha la acción que actualiza el store
            dispatch(addTodo(text)); // LO QUE REALMENTE SE EJECUTA ES ESTO
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer 
