import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppContainer from './AppRouter';
import reportWebVitals from './reportWebVitals';

// Nos traemos el STORE de la aplicación
import { createStoreWithSagaMiddleware } from './store/config/storeConfig';

// Nos traemos el PROVIDER de React Redux -> Muy parecido a cómo funcionaba el Hook useContext()
import { Provider } from 'react-redux'; // nos va a permitir pasar los datos del Store a la aplicación

// Creamos el Store de la aplicacción a partir de lo que nos devuelve
// la función que hemos creado 'createStoreWithSagaMiddleware'
let store = createStoreWithSagaMiddleware();

ReactDOM.render(
  <Provider store={store}>
    {/*  Aquí dentro ya estaría disponible el STORE de REDUX con el ROOTREDUCER ASOCIADO */}
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
