import React, { useState, useContext } from 'react'


// Crear iun Contexto, lo inicializamos y luego le daremos valor
const MiContexto = React.createContext(null);


// Componente 1
function Componente1(props) {

    // Especificamos el valor del estado a partir del contexto que va a recibir
    const estado = useContext(MiContexto);

    return (
        <div>
            <h3>Componente 1</h3>
            <h4>Valor: {estado.valor}</h4>
            <Componente2 />
        </div>
    )
}

// Componente 2
function Componente2(props) {

    // Especificamos el valor del estado a partir del contexto que va a recibir
    const estado = useContext(MiContexto);

    return (
        <div>
            <h3>Componente 2</h3>
            <h4>Nombre Usuario: {estado.nombre}</h4>
        </div>
    )
}


// Pintar a ambos componentes -> Componente de ORDEN SUPERIOR
export default function EjemploUseContext() {

    const estadoInicial = {
        nombre: 'Martín',
        valor: 29
    }

    // Definimos con useState la gestión del estado del componente
    const [datos, setDatos] = useState(estadoInicial);

    // Función que modifica los datos a través del setDatos()
    function modificarDatos(){
        const datosNuevos = {
            nombre: 'Pepe',
            valor: 30
        }
        setDatos(datosNuevos);
    }

    /**
     * Vamos a pasar el contexto a través del Provider del Contexto creado
     * Con lo que los componentes que estén dentro de este componente, podrán
     * Acceder a los valores pasados y actualizarse en caso de que éstos cambien
     */
    return (
        <MiContexto.Provider value={ datos }>
            <div>
                <h3>**** EJEMPLO USECONTEXT CON PROVIDER **** </h3>
                {/* El componente 1 pinta al componente 2 y por lo tanto también le pasa el contexto */}
                <Componente1 /> 
                <button onClick={ modificarDatos }>Modificar Datos</button>
            </div>
        </MiContexto.Provider>
    )
}
