import { fork, take, call, put } from 'redux-saga/effects'
import * as NewsActionCreator from './actionCreator'
import { NewsAPI } from './../../apis'

const watchFetchNewsList = function * () {
    while (true) {
        const { payload } = yield take('NEWS_GET_NEWS_LIST')
        yield put(NewsActionCreator.updateNewsIsLoading())
        const apiRes = yield call(NewsAPI.getNewsList, payload.option)

        if (apiRes.status === 'ok') {
            yield put(NewsActionCreator.updateNewsList(apiRes.articles))
            yield put(NewsActionCreator.updateNewsIsLoading())
        } else {
            // TODO-N: handle the error
        }
    }
}

export default [
    fork(watchFetchNewsList)
]
