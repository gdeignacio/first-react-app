import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import filterReducer from './filterReducer';
import { userReducer } from './userReducer';


const rootReducer = combineReducers(
    {
        // estado : reducer
        todosState: todosReducer,
        filterState: filterReducer,
        userState: userReducer
        // ... 
    }
);

export default rootReducer;