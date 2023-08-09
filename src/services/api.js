import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://railway.app/project/76e5d1f3-48c4-4bdb-a712-5b4caa5a5c9c'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')

  const token = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurger
