import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import news from './news'

const rootReducer = combineReducers({
    news,
    routing
})

export default rootReducer
