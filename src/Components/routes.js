import Loadable from 'react-loadable'

import LoadingPage from './pages/LoadingPage'

// Not Found Page
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingPage,
})

// Login page
export const AsyncLogin = Loadable({
  loader: () => import('./pages/Login'),
  loading: LoadingPage,
})

// User management page
export const AsyncUser = Loadable({
  loader: () => import('Containers/User'),
  loading: LoadingPage,
})

// Dashboard
export const AsyncDashboard = Loadable({
  loader: () => import('./pages/Dashboard'),
  loading: LoadingPage,
})

// Reset Password Page
export const AsyncResetPassword = Loadable({
  loader: () => import('Containers/ResetPassword'),
  loading: LoadingPage,
})
// Confirm Password Page
export const AsyncConfirmResetPassword = Loadable({
  loader: () => import('./pages/ConfirmResetPassword'),
  loading: LoadingPage,
})

// New Password Page
export const AsyncNewPassword = Loadable({
  loader: () => import('Containers/NewPassword'),
  loading: LoadingPage,
})
// Demo
export const AsyncDemo = Loadable({
  loader: () => import('Containers/Demo'),
  loading: LoadingPage,
})
