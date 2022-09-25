import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/Index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

