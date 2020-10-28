/**
 * Archivo donde especificar WATCHER SAGAS y WORKER SAGAS
 * 
 * * WATCHER SAGA
 * _____________________
 * Función GENERADORA que va a estar escuchando un tipo de acciones asíncronas.
 * Cuando recibe una, pone a trabajar a un WORKER SAGA para que realice el trabajo
 * Asíncrono.
 * 
 * * WORKER SAGA
 * _____________________
 * Función GENERADORA que recibe la ACCIÓN con su Type y su Payload y se encarga de
 * ejecutar el proceso asóncrono.
 * Una vez termina, emite ya la acción que sí que escucha el REDUCER ASIGNADO y entonces
 * se actualiza el estado de la aplicación (STORE)
 * 
 */
import { takeLatest, call, put } from 'redux-saga/effects';
// takLates -> Escuchar la última acción de un tipo concreto
// call -> llamar a una función desde el Worker Saga
// put -> Despachar una acción nueva desde el Worker Saga
import axios from 'axios';
// Axios es la librería para realizar peticiones HTTP


export function* watcherSaga(){
    // pone a trabajar al Worker Saga cuando escucha una acción de tipo API_CALL_REQUEST
    yield takeLatest('API_CALL_REQUEST', workerSaga);
}


export function* workerSaga(action){
    try {
        console.table(action);
        // Obtenemos la respuesta de la petición HTTP
        const response = yield call(fetchHTTP(action.payload.request));
        // Obtenemos el token
        const token = response.data.token;
        // Despachamos una acción que viene determinada en la acción anterior
        // concretamente la OkAction
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        });
    } catch (error) {
        // Despachamos una acción que viene determinada en la acción anterior
        // concretamente la failAction
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        });
    }
}

// Función que ejecuta la petición HTTP y devuelve su respuesta
function fetchHTTP(request){
    return function(){
        return axios(request);
    }
}





