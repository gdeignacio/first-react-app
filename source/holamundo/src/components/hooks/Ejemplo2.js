// Ejemplo de Componente que hace uso de los hooks:
// * useState, userRef, useEffect

import React, { useState, useRef, useEffect } from 'react'

export default function EjemploOtrosHooks() {

    // Valor de Referencia con la vista
    const miRef = useRef();

    // Dos estados con contadores distintos
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // Funciones para modificar los estados por separado
    function incrementar1(){
        setcontador1(contador1 +1);
    }

    // Funciones para modificar los estados por separado
    function incrementar2(){
        setcontador2(contador2 +1);
    }

    // ** CASO 1 - USEEFFECT SIEMPRE SE EJECUTA (CONTADOR1 Y CONTADOR2)
    // El bloque de código que vayamos a poner se va a ejecutar cuando 
    // Cualquiera de los dos contadores sea ejecutado

    useEffect(() => {
        // Mostramos por consola los datos del elemento referenciado
        console.table(miRef);
    })

    // TODO Caso2 y Caso3

    return (
        <div>
            <h2>**** EJEMPLO USESTATE, USEREF, Y USEEFFECT</h2>
            {/* Elemento referenciado con "miRef" */}
            <h3 ref={miRef}>
                Elemento Referenciado: { contador1 } - { contador2 }
            </h3>
            <button onClick= {incrementar1}>Incrementar Contador 1</button>
            <button onClick= {incrementar2}>Incrementar Contador 2</button>
        </div>
    )
}
