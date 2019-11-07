import React from 'react'
import ReactDOM from 'react-dom'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { PersistGate } from 'redux-persist/lib/integration/react'

import createStore from './Stores/CreateStore.js'
import { unregister } from './registerServiceWorker'
import App from 'Components/App'
import './i18n'
import { getTokenData, getPermissions } from 'Utils/token'
import { UserContext } from 'Contexts/UserData'

const history = createHashHistory()

const auth = getTokenData()
const permissions = getPermissions()

const userData = { auth, permissions }

async function init() {
  const store = createStore(history)

  const MOUNT_NODE = document.getElementById('root')

  const render = () =>
    ReactDOM.render(
      <Provider store={store}>
        <PersistGate persistor={store.persistor}>
          <ConnectedRouter history={history}>
            <UserContext.Provider value={userData}>
              <App />
            </UserContext.Provider>
          </ConnectedRouter>
        </PersistGate>
      </Provider>,
      MOUNT_NODE
    )
  if (module.hot) {
    module.hot.accept('Components/App', () => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE)
      render()
    })
  }

  render()
}

init()

unregister()
