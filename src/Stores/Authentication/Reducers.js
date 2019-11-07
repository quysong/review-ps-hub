import { INITIAL_STATE } from './InitialState'
import { fromJS } from 'immutable'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

// Set userdata and permission when checkroles success
const setRoleItems = (state, { userData }) =>
  state.merge(
    fromJS({
      user: userData,
    })
  )

// Log out
export const doLogout = (state = INITIAL_STATE) => {
  localStorage.clear()
  return INITIAL_STATE
}
const reducer = createReducer(INITIAL_STATE, {
  // do log out
  [AuthTypes.DO_LOGOUT]: doLogout,
  // Check roles
  [AuthTypes.GET_ROLES_SUCCESS]: setRoleItems,
})

export default reducer
