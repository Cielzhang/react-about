import fetch from '../utils/axios'

export function getJDDatas(keyword) {
  return fetch({
    url: `http://www.crcong.cn:5000/getJDData?keyword=${keyword}`,
    method: 'get'
  })
}
