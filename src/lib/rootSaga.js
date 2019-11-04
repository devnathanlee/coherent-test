import newsSaga from './../reducers/news/saga'

import { all } from 'redux-saga/effects'

const rootSagas = function * () {
    yield all([
        ...newsSaga
    ])
}

export default rootSagas
