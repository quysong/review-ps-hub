import { put, call, takeLatest, all } from 'redux-saga/effects'
import { AuthActions, AuthTypes } from 'Stores/Authentication/Actions'
import { AuthService } from 'Services/AuthService'
import { UserService } from 'Services/UserService'
import { getTokenData, setPermissions } from '../../Utils/token'
import { checkResponseError } from 'Utils/checkResponseError'
import { camelizeKeys } from 'humps'

// Get roles worker
function* getRolesWorker() {
  try {
    const user = camelizeKeys(getTokenData())
    const response = yield call(AuthService.getUserRoles, user.id)
    const userDetail = yield call(UserService.getUserInfo, user.id)
    checkResponseError(response)
    checkResponseError(userDetail)
    setPermissions(response.items)
    yield put(AuthActions.getRolesSuccess(userDetail.item))
  } catch (error) {
    yield put(AuthActions.getRolesFailure())
  }
}
export default function* watcher() {
  yield all([takeLatest(AuthTypes.GET_ROLES_REQUEST, getRolesWorker)])
}
