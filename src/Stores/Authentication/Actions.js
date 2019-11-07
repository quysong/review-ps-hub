import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // log out
    doLogout: null,
    // Get User Role
    getRolesRequest: null,
    getRolesSuccess: ['userData'],
    getRolesFailure: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const AuthTypes = Types
export const AuthActions = Creators
