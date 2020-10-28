// Ejemplo de Componente que hace uso de los hooks:
// * useState, useRef, useEffect

import React, { useState, useRef, useEffect } from 'react'

export default function EjemploOtrosHooks() {

    // Valor de Referencia con la vista
    const miRef = useRef();

    // Dos estados con contadores distintos
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Funciones para modificar los estados por separado
    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    // ** CASO 1 - USEEFFECT SIEMPRE SE EJECUTA (CONTADOR1 Y CONTADOR2)
    // El bloque de código que vayamos a poner se va a ejecutar cuando 
    // cualquiera de los dos contadores sea modificado
    // useEffect(() => {
    //     console.table(miRef); 
    // })

    // ** CASO 2 - USEEFFECT SE EJECUTA ÚNICAMENTE CUANDO SE MODIFIQUE EL CONTADOR1
    // useEffect(() => {
    //     console.table(miRef); 
    // }, [contador1]);

    // ** CASO 3 - USEEFFECT SE EJECUTA ALGUNO DE LOS ESTADOS MENCIONADOS EN EL [] ES MODIFICADO
    useEffect(() => {
        console.table(miRef); 
    }, [contador1, contador2]);

    return (
        <div>
            <h2>**** EJEMPLO USESTATE, USEREF Y USEEFFECT</h2>
            { /* Elemento referenciado con "miRef" */ }
            <h3 ref={miRef}>
                Elemento Referenciado: { contador1 } - { contador2 }
            </h3>
            <button onClick= { incrementar1 }>Incrementar Contador 1</button>
            <button onClick= { incrementar2 }>Incrementar Contador 2</button>
        </div>
    )
}
