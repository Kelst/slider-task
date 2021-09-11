import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_GALLERY, REQUEST_GALLERY} from './types'


export function* sagaWatcher() {
  yield takeEvery(REQUEST_GALLERY, sagaWorker)
}

function* sagaWorker() {
 
    const payload = yield call(fetchImages)
    yield put({ type: FETCH_GALLERY, payload })
   
}
async function fetchImages() {
  const response = await fetch('https://my-json-server.typicode.com/Kelst/server/Photos')

  return await response.json()
}