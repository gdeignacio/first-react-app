import React from 'react'
import PropTypes from 'prop-types'

function ListaPersonas(props) {

    const listado = props.personas;

    const personasElement = listado.map((persona, index) =>
        // Esto debería ser sustituido por un componente Persona.js
        <li key={index}>
            {persona}
        </li>
    );

    return (
        <div>
            <ul>
                {personasElement}
            </ul>
        </div>
    )
}

ListaPersonas.propTypes = {
    personas: PropTypes.array
}

export default ListaPersonas

