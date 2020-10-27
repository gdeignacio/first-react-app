// Un componente que dispone de elementos hijo
import React from 'react'

export default function MisChildren(props) {
    return (
        <div>
            <h1>
                Componente con Children
            </h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/*Children del componente que serán renderizados aquí*/}
            {/*No usar la palabra reservada children para los props*/}
            {props.children}
        </div>
    )
}
