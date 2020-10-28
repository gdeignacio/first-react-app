import React from 'react';
import ReactDOM from 'react-dom';
// Importar componente APP
import App from './components/App';

// Importamos las hojas de estilos CSS

import './css/index.scss';
import './css/otro.css';

// Import de un export default
import saludo from './saludo.js'

import obtenerUsuario from 'utils/services/random-user-service';

// Añadir el componente al archivo index.html en el elemento root
ReactDOM.render(<App />, document.getElementById('root'));

console.log(`Prueba con webpack: ${saludo}`);

obtenerUsuario().then((respuesta)=>{
    if (respuesta.status ===200){}
    const usuario = respuesta.data.result[0];
    const nombre = usuario.name.first;

    const h1Saludo = document.getElementById('saludo');
    h1Ssaludo.innerHTML = 'HOLA, $(nombre)';
} else {
    console.log('Status code error: ${respuesta.status'});
}

)