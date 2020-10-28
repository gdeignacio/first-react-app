import React from 'react';
// Importamos para gestión de rutas en nuestra aplicación de React
/**
 * React crea aplicaciones SPA -> Single Page Application
 * Quiere decir esto, que únicamente hay un index.html
 * Tenemos que simular un sistema de enrutado de alguna manera
 * para poder navegar entre vistas de componentes que actúan como páginas
 * 
 */
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
// - Redirect -> Redirigir la ruta escogida
// - Router -> Es el alias que usamos para especificar un Stack de Routes
// - Route -> Es el usamos para declarar una ruta dentro de nuestro Router

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

// import FormLoginReduxSagaContainer from './components/redux/containers/FormLoginReduxSagaContainer';
// import FilterOptions from './components/redux/components/FilterOptions';
// import TodoFormContainer from './components/redux/containers/TodoFormContainer';
// import TodosContainer from './components/redux/containers/TodosContainer';
// import FormularioLoginFormik from './components/formularios/FormularioLoginFormik';
// import FormularioRegistroFormik from './components/formularios/FormularioRegistroFormik';
// import LoginControl from './components/condicional/LoginControl';
// import Mensajes from './components/condicional/Mensajes';
// import FormularioRegistro from './components/formularios/FormularioRegistro';
// import ListaPersonas from './components/listas/ListaPersonas';
// import EjemploUseContext from './components/hooks/Ejemplo3';
// import EjemploUseState from './components/hooks/Ejemplo1';
// import EjemploOtrosHooks from './components/hooks/Ejemplo2';
// import Contador from './components/Contador';
// import Saludo from './components/Saludo';
// import Bienvenida from './components/Bienvenida';
// import MisChildren from './components/MisChildren';


function App() {

  // let mensajesNuevos = 50;
  // let listadoPersonas = ['Martín', 'Alberto', 'Elena'];

  return (
    <div className="App">
      <header className="App-header">
        {/* <Saludo nombre='Martín' apellido='San José de Vicente'/> */}
        {/* <Contador /> */}
        {/* <Bienvenida nombreUsuario='ADMIN' /> */}
        {/* <MisChildren nombre='Martín'>
          <h2>
            Apellidos: San José de Vicente
          </h2>
        </MisChildren> */}
        {/* ***** HOOKS ****** */}
        {/* <EjemploUseState /> */}
        {/* <EjemploOtrosHooks /> */}
        {/* <EjemploUseContext /> */}
        {/* ***** RENDERIZADO CONDICIONAL ***** */}
        {/* <LoginControl /> */}
        {/* <Mensajes mensajesSinLeer={mensajesNuevos}/>
        <Mensajes mensajesSinLeer={0}/> */}
        {/* ***** LISTADOS ******** */}
        {/* <ListaPersonas personas={ listadoPersonas }/> */}
        {/* ***** FORMULARIOS ***** */}
        {/* <FormularioRegistro /> */}
        {/* <FormularioLoginFormik /> */}
        {/* <FormularioRegistroFormik /> */}
        {/* ****** EJEMPLO REDUX **** */}
        {/* <TodoFormContainer /> */}
        {/* <TodosContainer /> */}
        {/* <FilterOptions /> */}
        {/* ****** EJEMPLO REDUX SAGA ***** */}
        {/* <FormLoginReduxSagaContainer /> */}
      </header>
    </div>
  );
}

export default App;