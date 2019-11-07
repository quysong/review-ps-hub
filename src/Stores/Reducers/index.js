import { combineReducers } from 'redux'
import * as auth from '../Authentication/InitialState'

import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: storage,
}

// Persist reducer need to declare here
export const initialState = {
  [auth.MODULE_NAME]: auth.INITIAL_STATE,
}
export const combine = reducers => {
  const reducerNames = Object.keys(reducers)
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state
    }
  })
  return persistReducer(persistConfig, combineReducers(reducers))
}
