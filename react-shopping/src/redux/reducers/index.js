import { combineReducers } from 'redux'
import visibility from './visibility'
import shoppingCar from './shoppingCar'

const rootReducer = combineReducers({
  visibility,
  shoppingCar
})

export default rootReducer
