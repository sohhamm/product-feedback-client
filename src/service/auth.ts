import {API_URL} from './index'

export const login = async () => {
  const res = await fetch(API_URL + 'auth/google')
  console.log(res, 'res')
  return await res.json()
}
