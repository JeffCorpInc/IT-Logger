// 1- We create actions and dispatch them to reducers
// 2- We add actions to reducers and give case inside it 
// 3- we add those reducers to components

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers"

const initialState = {}; 

const store = createStore(

    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))

);

export default store;