import { get, post } from '../utils/request'

const API_URL = 'https://test.youbaobao.xyz:18081'
const APP_ID = 'wxce8796bf2ff9558d'
const APP_SECRET = 'd36c860118b27f2a3244d5d029fa3ca5'

export function getHomeData(params) {
  return get(`${API_URL}/book/home/v2`, params)
}

export function recommend() {
  return get(`${API_URL}/book/home/recommend/v2`)
}

export function freeRead() {
  return get(`${API_URL}/book/home/freeRead/v2`)
}

export function hotBook() {
  return get(`${API_URL}/book/home/hotBook/v2`)
}

export function getOpenId(code) {
  return get(`${API_URL}/openId/get`, {
    appId: APP_ID,
    secret: APP_SECRET,
    code
  })
}

export function register(openId, userInfo) {
  return post(`${API_URL}/user/register`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  })
}
