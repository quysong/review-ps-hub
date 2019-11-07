import { MODULE_NAME } from './InitialState'

const getUserData = state =>
  state[MODULE_NAME].get('user') ? state[MODULE_NAME].get('user').toJS() : {}

export const AuthSelectors = {
  getUserData,
}
