// Root Reducer and combining multiple reducers to send it to the store
// importing sub reducers and combining them

import { combineReducers } from "redux";
import logReducer from "./logReducer";


const rootReducer = combineReducers({

    log: logReducer
}); 

export default rootReducer;
