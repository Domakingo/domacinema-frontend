import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL || 'https://cinema.domakingo.it/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
