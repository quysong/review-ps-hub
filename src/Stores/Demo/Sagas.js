import { put, call, takeLatest, all } from 'redux-saga/effects'
import { DemoActions, DemoTypes } from './Actions'
import { DemoSelectors } from './Selectors'
import { DemoService } from '../../Services/DemoService'
import { LoadingActions } from '../Loading/Actions'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'
import { checkResponseError } from 'Utils/checkResponseError'
// Get demo list worker
function* getListDemoWorker() {
  try {
    yield put(LoadingActions.showLoadingList())
    const response = yield call(DemoService.getListDemo)
    checkResponseError(response)
    yield put(LoadingActions.hideLoadingList())
    yield put({
      type: DemoTypes.GET_ITEMS_SUCCESS,
      items: response.items,
      totalCount: response.totalCount,
    })
  } catch (error) {
    yield put({
      type: DemoTypes.GET_ITEMS_FAILURE,
    })
    yield put(LoadingActions.hideLoadingList())
  }
}

function* watcher() {
  yield all([takeLatest(DemoTypes.GET_ITEMS_REQUEST, getListDemoWorker)])
}

sagaRegistry.register(MODULE_NAME, watcher)

export default watcher
