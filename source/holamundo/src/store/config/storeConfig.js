// Función para crear el Store de la aplicación
// - CreateStore -> Crear el Store
// - applyMiddleware -> Aplicar un Middleware entre las acciones y el reducer
// - compose -> Componer el Store con el Middleware y el DevTools
import { createStore, applyMiddleware, compose } from 'redux';
// Importamos ComposeWithDevTools para poder analizar el store de la app en Chrome/Firefox
import { composeWithDevTools } from 'redux-devtools-extension';

// Importamos el Root Reducer para dárselo al store de la aplicación
import rootReducer from '../reducers/rootReducer';


// SAGAS -> Nos traemos nuestro WatcherSaga para ponerlo a escuchar
import { watcherSaga } from '../sagas/sagas';
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

export function createStoreWithSagaMiddleware(){

    // Creamos el Saga Middleware
    const sagaMiddleware = createSagaMiddleware();

    // Crear nuestro Store añadiendo el sagaMiddleware
    let store = 
        createStore(
            rootReducer, 
            compose(
                applyMiddleware(sagaMiddleware), 
                composeWithDevTools()
            )
        );
    
    // Lanzamos el Saga 'watcherSaga' para que empiece a escuchar las acciones
    // asíncronas
    sagaMiddleware.run(watcherSaga);
    // Podríamos tener más watcherSagas...
    
    return store;

}




