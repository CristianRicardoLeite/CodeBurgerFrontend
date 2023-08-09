import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://railway.app/project/76e5d1f3-48c4-4bdb-a712-5b4caa5a5c9c/service/5c838709-d5ac-4dd8-b3ad-20fd816a8db2?id=25685f33-8ebd-42ca-aa6e-31dcd4f0f3a7'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')

  const token = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurger
