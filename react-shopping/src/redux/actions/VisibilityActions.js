import * as types from '../constants/VisibilityTypes'
import { message } from 'antd'
import { getJDDatas } from '../../api'

const changeKeyword = data => ({ type: types.CHANGE_KEYWORD, data })

// redux-thunk
// function changeKeywordAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(changeKeyword())
//     }, 1000)
//   }
// }

export const changeKeywordAsync = keyword => dispatch => {
  const hide = message.loading('疯狂请求数据中...', 0)
  getJDDatas(keyword)
    .then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          const goodsList = res.data.data
          hide()
          dispatch(changeKeyword({ keyword, goodsList }))
        } else {
          message.error(res.data.msg)
        }
      } else {
        message.error(res.statusText)
      }
    })
}
