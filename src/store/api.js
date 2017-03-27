import axios from 'axios'

export function getZen () {
  return axios.get('https://api.github.com/zen')
}
