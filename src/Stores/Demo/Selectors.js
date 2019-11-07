import { MODULE_NAME } from './InitialState'

const getFilter = state => state[MODULE_NAME].get('filter')

const getItems = state => state[MODULE_NAME].get('items')

export const DemoSelectors = {
  getItems,
  getFilter,
}
