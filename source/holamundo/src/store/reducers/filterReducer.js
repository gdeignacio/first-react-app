let initialState = 'SHOW_ALL';

const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.payload.filter;
        default:
            return state;
    }
}

export default filterReducer;