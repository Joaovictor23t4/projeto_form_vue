import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/'
})

const apiGit = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: ``
  }
})

export default {api, apiGit}
