import axios from 'axios'
const baseUrl = 'http://localhost:3005/api/chapters/'

const getChapters = () => {
  console.log('At service!')
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getRules = (chapterId) => {
  const num = chapterId.slice(0, -1)
  const request = axios.get(baseUrl + num)
  return request.then(response => response.data)
}

const search = (search) => {
  const request = axios.post(baseUrl + 'search' + `?term=${search}`)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getChapters, getRules, search }