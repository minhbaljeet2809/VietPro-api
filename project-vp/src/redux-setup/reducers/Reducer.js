import {combineReducers} from 'redux'
import DataAPI from './DataAPI'
import Like from './Like'
import Arrsttlike from './Arrsttlike'
import Arrview from './Arrview'
var reducer = combineReducers({
     dataAPI : DataAPI,
     like: Like,
     sttlike: Arrsttlike,
     arrview: Arrview
})

export default reducer