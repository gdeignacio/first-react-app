import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/**
 * 
 * @param {todos}
 * Lista de Todos que va a servir para iterar y pintar cada Todo
 * @param {onTodoClick}
 * Una función que se pasará al componente Todo como prop y que vendrá
 * definida desde el TodosContainer. Se trata de una función que despachará
 * la ACCIÓN de tipo 'TOGGLE_TODO'. Este comportamiento lo va a recibir el TodoList
 * desde TodosContainer a través del método connect de 'redux'
 */
const TodoList = ({todos, onTodoClick}) => {
    return (
        <div>
            <h1> Mi Lista de Tareas </h1>
            <ul>
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        { ...todo } // completed, id, text
                        onClick={
                            () => onTodoClick(todo.id)
                        }
                    />
                ))}
            </ul>
        </div>
    );
};

/**
 * Especificamos los tipos y estructura de los
 * props del componente TodoList
 */
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};


export default TodoList;
