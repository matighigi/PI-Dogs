import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducer";

//el store contiene y comunica al reducer el estado actual de la aplicacion y cual fue la action que se ejecuto
//seteamos el store utilizando la libreria composeWithDevTools
export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);


 