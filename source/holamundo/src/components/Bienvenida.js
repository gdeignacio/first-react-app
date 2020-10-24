import React, { useState } from 'react'

/**
*  
* ? Vamos a crear un par de estilos, en vez de crearlas en hojas de estilos CSS
* ? Los crearemos como una constantes de este archivo
*/

const loggedStyle = {
    color: 'blue'
}


const unloggedStyle = {
    color: 'red',
    fontWeight: 'bolder' // font-weight: bolder
}

export default function Bienvenida(props) {

    /**
     * useState --> Hook que permite definir una propiedad de estado privato
     * además del estado que se va a tener
     * 
     * [variable de estado. método para modificarla] = useState(valor por defecto);
     * 
     */

    const [logged, setLogged] = useState(false); // queremos que el valor logged sea falso al principio

    return (
        <div style={logged ? loggedStyle: unloggedStyle}>
            <p> Hola, { props.nombreUsuario } </p>
            <button
                onClick={
                () =>  {
                        console.log('Botón pulsado');
                        setLogged(!logged);
                    }
                }
            >
                { logged ? 'Salir' : 'Entrar' }
            </button>
        </div>
    )
}
