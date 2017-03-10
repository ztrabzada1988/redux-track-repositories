import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers/index';
import thunk from 'redux-thunk'


export const Store = CreateStore(Reducers.repositoryReducer, applyMiddleware(thunk));
