import {combineReducers} from 'redux'

import rowsMin from './rowsMin'
import rowsMax from './rowsMax'
import loading from './loading'


export default history => combineReducers({
  rowsMax,
  rowsMin,
  loading
})