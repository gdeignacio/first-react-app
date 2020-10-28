import React, { useState } from 'react';

/**
 * ? Vamos a crear un par de estilos. En vez de crearlas en hojas de estilos CSS
 * ? Los crearemos como una constantes de este archivo
*/

const loggedStyle = {
    color: 'green'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bolder' // font-weight: bolder
}

export default function Bienvenida(props) {

    /**
     * useState -> Hook que permite definir una propiedad de estado privado
     * además del método que se va a usar para modificarlo
     * además del valor inicial que va tener
     * 
     * const [variable de estado, método para modoficarla] = useState(valor por defecto);
     */
    
    const [logged, setLogged] = useState(false); // queremos que el valor logged sea falso al principio
    
    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            <p>Hola, {props.nombreUsuario} </p>
            <button
                onClick={
                    () => {
                        console.log('Botón Pulsado');
                        setLogged(!logged);
                    }
                }
            >
                { logged ? 'Salir' : 'Entrar' }
            </button>
        </div>
    )
}
