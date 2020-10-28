const initialState = {
    fetching: false,
    token: null, // punto del Store gestionado de forma asíncrona
    error: null, // punto del Store gestionado de forma asíncrona
    loged: false // punto del Store gestionado de forma asíncrona
}

export function userReducer(state = initialState, action){

    switch (action.type) {
        case 'API_CALL_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null,
                loged: false
            };
        case 'API_CALL_SUCCESS':
            return {
                ...state,
                fetching: false,
                error: null,
                loged: true,
                token: action.payload.token
            };
        case 'API_CALL_FAILURE':
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
                loged: false,
                token: null
            }    
        default:
            return state;
    }
}