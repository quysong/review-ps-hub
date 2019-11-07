import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router/immutable'
import { persistStore } from 'redux-persist'

import { combine, initialState } from './Reducers/index'

// Import Saga and register saga to register static sagas
import sagaRegistry from './Sagas/SagaRegistry'
import authSaga from './Authentication/Sagas'
import startupSaga from './Startup/Sagas'
// Import reducer to register static reducer
import reducerRegistry from './Reducers/ReducerRegistry'
import authReducer from './Authentication/Reducers'
import loadingReducer from './Loading/Reducers'
// Import module name
import { MODULE_NAME as authName } from './Authentication/InitialState'
import { MODULE_NAME as startupName } from './Startup/InitialState'
import { MODULE_NAME as loadingName } from './Loading/InitialState'

const createRootStore = history => {
  const middleware = []
  const enhancers = []
  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(routerMiddleware(history))
  enhancers.push(applyMiddleware(...middleware))
  let composeEnhancers = compose

  if (
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
  const rootReducer = combine(reducerRegistry.getReducers())
  // Redux persist
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  const persistor = persistStore(store)
  // Persitor
  store.persistor = persistor
  // Run sagas
  // Register saga change listener
  sagaRegistry.setChangeListener(saga => {
    sagaMiddleware.run(saga)
  })
  sagaRegistry.register(startupName, startupSaga)
  sagaRegistry.register(authName, authSaga)
  // Register reducer change listener
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combine(reducers))
  })
  // Register reducer for global reducer ('router', 'authentication', 'global', 'loading')
  reducerRegistry.register('router', connectRouter(history))
  reducerRegistry.register(authName, authReducer)
  reducerRegistry.register(loadingName, loadingReducer)
  return store
}

export default createRootStore
