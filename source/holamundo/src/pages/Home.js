import React from 'react';

// Nos traemos el useHistory que es un hook para
// gestionar el stack de rutas de la apliación
import { useHistory } from 'react-router-dom';


const Home = () => {

    // Creamos una constante para poder navegar
    let history = useHistory();

    const navegar = (url) => {
        // Añadimos una ruta nueva al stack de rutas de la aplicación
        history.push(url);
    }

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>
                        Página de la Home
                    </h1>
                    <button onClick={() => {navegar('/profile')}}>
                        Entrar al Perfil
                    </button>
                </header>
            </div>
        </div>
    );
}

export default Home;