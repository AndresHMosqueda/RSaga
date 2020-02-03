import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

//worker Saga
function* handleImagesLoad() {
    console.log('Fetching images....');
}

//watcher Saga
//watcher saga which listen to an action and then will invoke the workersaga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;
