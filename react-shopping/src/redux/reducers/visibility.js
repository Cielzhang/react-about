import { CHANGE_KEYWORD } from '../constants/VisibilityTypes'

const initialState = {
  keyword: '手机',
  goodsList: []
}

export default function visibility(state = initialState, action) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return action.data
    default:
      return state
  }
}
