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
import {connect} from 'react-redux';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';


function App({ loged }) {

  return (
    <Router>
      <Route exact path='/'>
          <Home />
      </Route>
      <Route exact path='/login'>
          <Login />
      </Route>
      <Route exact path='/profile'>
          {
            loged ? 
            <Profile />
            :
            <Redirect to='/login' />
          }
      </Route>
      <Route exact path='/register'>
          { 
            loged ? 
            <Redirect to='/profile' />
            :
            <Register />
          }
      </Route>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    loged: state.userState.loged
  }
}


const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
