import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as routes from './routes'
import 'antd/dist/antd.css'
import 'Assets/fonts/stylesheet.css'
import 'Assets/styles/global.scss'
import ErrorBoundary from './pages/ErrorBoundary'

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" exact component={routes.AsyncLogin} />
      <Route path="/user" exact component={routes.AsyncUser} />
      <Route path="/dashboard" exact component={routes.AsyncDashboard} />
      <Route
        path="/reset-password"
        exact
        component={routes.AsyncResetPassword}
      />
      <Route
        path="/confirm-reset-password"
        exact
        component={routes.AsyncConfirmResetPassword}
      />
      <Route path="/new-password" exact component={routes.AsyncNewPassword} />
      <Route path="/demo" exact component={routes.AsyncDemo} />
      <Route component={routes.AsyncNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
