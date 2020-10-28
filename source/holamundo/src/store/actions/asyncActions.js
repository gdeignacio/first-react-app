// Función que devuelve una acción para gestión de asincronía en el store
export function login(email, password){
    return {
        // Esta acción será capturada por el WATCHER SAGA
        type: 'API_CALL_REQUEST',
        payload: {
            // Configuración para AXIOS en el WORKER SAGA
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            // Acciones que despachará el WORKER SAGA cuando acabe la petición http
            okAction: 'API_CALL_SUCCESS',
            failAction: 'API_CALL_FAILURE'
        }
    }
}


export function httpRequest(method, url, data){
    return {
        // Esta acción será capturada por el WATCHER SAGA
        type: 'API_CALL_REQUEST',
        payload: {
            // Configuración para AXIOS en el WORKER SAGA
            request: {
                method: method,
                url: url,
                data: data
            },
            // Acciones que despachará el WORKER SAGA cuando acabe la petición http
            okAction: 'API_CALL_SUCCESS',
            failAction: 'API_CALL_FAILURE'
        }
    }
}