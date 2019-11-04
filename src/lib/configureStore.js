import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import Reducer from './../reducers'
import rootSagas from './rootSaga'

export default function configureStore (history) {
    const initialState = {}

    const logger = createLogger({
        collapsed: false,
        stateTransformer: state => JSON.parse(JSON.stringify(state))
    })
    // create the saga middleware
    const saga = createSagaMiddleware()

    const routing = routerMiddleware(history)

    let middlewares = [
        saga,
        routing
    ]

    if (process.env.NODE_ENV !== 'production') {
        middlewares = [
            ...middlewares,
            logger
        ]
    }

    const enhancer = compose(applyMiddleware(...middlewares))

    const store = createStore(Reducer, initialState, enhancer)

    saga.run(rootSagas)

    return store
}
