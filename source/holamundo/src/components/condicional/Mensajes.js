import React from 'react';

export default function Mensajes(props) {
    const mensajesSinLeer = props.mensajesSinLeer;
        
    return (
        <div>
        {/* {mensajesSinLeer > 0 &&
            <p> Tienes {mensajesSinLeer} mensajes sin leer... </p>
        } */}
        {mensajesSinLeer > 0 ?
            ( <p> Tienes {mensajesSinLeer} mensajes sin leer... </p> ) :
            ( <p> No tienes mensajes pendientes... </p> )
        }
        </div>
    );
}