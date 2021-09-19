import {takeEvery, put, call} from 'redux-saga/effects'
import { hideLoader, showAlert, showLoader } from './actions'
import {FETCH_GALLERY, REQUEST_GALLERY} from './types'


export function* sagaWatcher() {
  yield takeEvery(REQUEST_GALLERY, sagaWorker)
}

function* sagaWorker() {
  try{
    yield put(showLoader())
    const payload = yield call(fetchImages)
    yield put({ type: FETCH_GALLERY, payload })
    yield put(hideLoader())
  }
   catch(e){
     yield put(showAlert(e))
    yield put(hideLoader())
   }
   
}
async function fetchImages() {
  
  const response = await fetch('https://my-json-server.typicode.com/Kelst/server/Photos')
  return await response.json()
}