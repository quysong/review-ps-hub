import { fromJS } from 'immutable'
/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'authentication'

export const INITIAL_STATE = fromJS({
  user: {},
})
