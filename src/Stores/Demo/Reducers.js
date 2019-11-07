import { fromJS } from 'immutable'

import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { DemoTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

const clearItems = state =>
  state.merge(
    fromJS({
      items: [],
      totalCount: 0,
      totalPage: 0,
    })
  )

const setItems = (state, { items, totalCount }) => {
  console.log('items', items)
  console.log('totalCount', totalCount)
  return state.merge(
    fromJS({
      items,
      totalCount,
    })
  )
}

const reducer = createReducer(INITIAL_STATE, {
  // List items action handler
  [DemoTypes.GET_ITEMS_SUCCESS]: setItems,
  [DemoTypes.CLEAR_ITEMS]: clearItems,
})

reducerRegistry.register(MODULE_NAME, reducer)
export default reducer
