import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Get List
    getItemsRequest: null,
    getItemsSuccess: ['items'],
    getItemsFailure: null,
    clearItems: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const DemoTypes = Types
export const DemoActions = Creators
