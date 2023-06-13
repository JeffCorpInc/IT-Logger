// Sub Reducers

import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG } from "../Components/Actions/type";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

const Reducer = (state = initialState, action) => {
     
    switch(action.type) {
        
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            }
        case ADD_LOG:
            return{
                // we are adding new log into existing array using spread operator
                logs: [...state.logs, action.payload],
                loading: false
            }
        case DELETE_LOG:
            return{
                // getting existing state
                ...state,
                logs: state.logs.filter( log => log.id !== action.payload ),
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case SET_CURRENT:
            return{
                ...state,
                // current me hamne action.payload se data existing state me add kardiya
                current: action.payload 
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                // existing state me data null kardiya
                current: null
            }
        case UPDATE_LOG:
            return{
                ...state,
                // jo log hamne select kiya wa he uske id get kare ge 
                logs: state.logs.map( log => log.id === action.payload.id ? action.payload : log ),
                loading: false
            }
        case LOGS_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case SEARCH_LOGS:
            return{
                ...state,
                logs: action.payload
            }
    

        default:
            return state;
    }
}

export default Reducer;