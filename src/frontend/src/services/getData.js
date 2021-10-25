import axios from 'axios'
const baseUrl = 'http://localhost:5000/'

export const getData = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
