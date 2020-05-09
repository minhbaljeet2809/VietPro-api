import {combineReducers} from 'redux'
import DataAPI from './DataAPI'
import Like from './Like'
var reducer = combineReducers({
     dataAPI : DataAPI,
     like: Like
})

export default reducer