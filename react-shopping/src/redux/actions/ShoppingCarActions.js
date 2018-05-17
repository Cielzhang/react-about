import * as types from '../constants/ShoppingCarTypes'

export const addGoods = data => ({ type: types.ADD_GOODS, data })
export const removeGoods = id => ({ type: types.REMOVE_GOODS, id })
export const changeGoodsCount = data => ({ type: types.CHANGE_GOODS_COUNT, data })
