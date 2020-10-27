// Ejemplo de Componente que hace uso del Hook UseState()

import React, {useState} from 'react'

export default function EjemploUseState() {
    
    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para un usuario
    const usuarioInicial = {
        nombre: 'Martín',
        email: 'martin@imaginagroup.com'
    }

    // Sintaxis e inicialización de useState
    const [contador, setContador] = useState(valorInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);

    // A partir de ahora, vamos a hacer uso de setContador par modificar el
    // estado-valor de "contador"
    // y haremos uso de setUsuario par actualizar el estado-valor de "usuario"
    // Función encargada de incrementar el contador

    function incrementar(){
        // Aumentar el contador en 1
        setContador(contador +1);
        console.log('Contador actual', contador);
    }

    function actualizarUsuario(){
        // Hacer uso de setUsurio par actualizarlo
        const nuevoUsuario = {
            nombre: 'Pepe',
            email: 'pepe@imaginagroup.com'
        }
        setUsuario(nuevoUsuario);
    }    
    
    return (
        <div>
            <h2>**** EJEMPLO HOOK USESTATE() ****</h2>
            <h3>Contador { contador }</h3>
            <h3>Datos del usuario</h3>
            <h4>Nombre: {usuario.nombre }</h4>
            <h4>Email: {usuario.email }</h4>
            {/*Evento de onClick que llama a la s funciones */}
            <button onClick={ incrementar }>Incrementar Contador</button>
            <button onClick={ actualizarUsuario }>Actualizar Usuario</button>
        </div>
    )
}
