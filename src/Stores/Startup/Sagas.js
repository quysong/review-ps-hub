import { put, takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'Stores/Startup/Actions'
import { push } from 'connected-react-router'

export function* startup() {
  yield put(push('/'))
}
export default function* watcher() {
  yield all([takeLatest(StartupTypes.STARTUP, startup)])
}
