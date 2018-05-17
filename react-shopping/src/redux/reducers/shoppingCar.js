import { ADD_GOODS, REMOVE_GOODS, CHANGE_GOODS_COUNT } from '../constants/ShoppingCarTypes'
const initialState = []

export default function shoppingCar(state = initialState, action) {
  switch (action.type) {
    case ADD_GOODS:
      const index = state.findIndex(e => e.id === action.data.id)
      if (index !== -1) {
        const _state = [...state]
        _state[index].count++
        return _state
      } else {
        return [...state, { ...action.data, count: 1 }]
      }
    case REMOVE_GOODS:
      const rIndex = state.findIndex(e => e.id === action.id)
      if (rIndex !== -1) {
        const _state = [...state]
        _state.splice(rIndex, 1)
        return _state
      } else {
        return [...state]
      }
    case CHANGE_GOODS_COUNT:
      const cIndex = state.findIndex(e => e.id === action.data.id)
      if (cIndex !== -1) {
        const _state = [...state]
        _state[cIndex].count = action.data.count
        return _state
      } else {
        return [...state]
      }
    default:
      return state
  }
}
