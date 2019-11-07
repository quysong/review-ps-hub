import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'demo'

export const INITIAL_STATE = fromJS({
  items: [],
  totalCount: 0,
  totalPage: 0,
})
