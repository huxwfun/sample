import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './modules'

export function initializeStore (initialState = {}) {
  return createStore(combineReducers(reducers), initialState, composeWithDevTools(applyMiddleware()))
}