import axios from 'axios'

const server = axios.create({
  timeout: 10000
})

export default server
