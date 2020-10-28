import React from 'react';
import PropTypes from 'prop-types';

// Creamos un componente que va a servie para crear Todos
// Éste recibirá por "props" la función a ejecutar en el submit
// del formulario. Este prop se llamará submit
const TodoForm = ({submit}) => {

    // Crear una referencia - asociado al input del formulario
    const textoTodo = React.createRef();

    return (
        <div>
            <h2> Crea tus nuevas tareas... </h2>
            <form onSubmit={
                (event) => {
                    event.preventDefault(); // evitamos que se recargue la página
                    submit(textoTodo.current.value); // ejecutamos la función de TodoFormContainer
                    textoTodo.current.value = '';
                }
            }>
                {/* Nuestro input para crear Todos */}
                <input type='text' ref={textoTodo} />
                <button type='submit'>Crear Todo</button>
            </form>
        </div>
    );
};


TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default TodoForm;
