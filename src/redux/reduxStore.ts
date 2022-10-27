import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {pokeReducer} from './pokeReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  state: pokeReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
