import {combineReducers} from 'redux'
import coursesReducer from './courses'
import authReducer from './auth'

const rootReducer = combineReducers({
    // Nơi khai báo các reducer con
    coursesReducer,
    authReducer,
})

export default rootReducer