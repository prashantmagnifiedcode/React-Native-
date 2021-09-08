import Changenumbersecond from '../reducer/multi'
import Changenumber from '../reducer/updown'
import TodoReducer from './todo'


import {combineReducers} from "redux"
const rootReducer = combineReducers({Changenumber,Changenumbersecond,TodoReducer})
export default rootReducer;
