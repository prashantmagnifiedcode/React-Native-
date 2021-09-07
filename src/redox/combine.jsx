import {combineReducers} from 'redux'
import changecookies from './changenumber'
import changewhatsapp from './whatsappchange'
const rootReducer = combineReducers({changecookies,changewhatsapp})
export default rootReducer;