import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {onClick}
 * Método para cambiar la propiedad "completed" del componente true - false 
 * @param {completed} 
 * Valor para comprobar si el Todo está completo on
 * Si es True -> Tachado
 * Si es false -> No aparace tachado
 * Sirve por lo tanto para gestionar la clase CSS que se le aplica
 * @param {text} string
 * Texto/Título del Todo para que sea renderizado en la vista HTML
 * @param {id} number
 * Id del Todo
 */
const Todo = ({onClick, completed, text, id}) => {
    return (
        <li 
            // El evento nativo OnClick ejecutará la función
            // pasada a través de props con el nombre "onClick"
            // desde el padre
            onClick = { onClick }
            /**
             * En caso de que el Todo tenga la propiedad completed
             * Como true, se aplicará un estilo de tachado de color verde
             * En caso de que no, no pondrá nada
             */
            style = {
                {
                    textDecoration: completed ? 'line-through' : 'none',
                    textDecorationColor: completed ? 'green' : 'none',
                    color: completed ? 'green' : 'white',
                }
            }
        >
            {/* El contenido a pintar por el LI es el texto del Todo */}
            {id} - { text }
        </li>
    );
};

/**
 * Especificamos las verificaciones de los props del componente
 * Tendremos un función (onClick), un booleano (completed) y
 * un string (text)
 */
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Todo;
