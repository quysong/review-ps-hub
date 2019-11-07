import jwtDecode from 'jwt-decode'
import { camelizeKeys } from 'humps'
const AUTH_TOKEN = 'auth'
const LANG = 'language'
const PERMISSIONS = 'permissions'
/**
|--------------------------------------------------
| Authentication Token
|--------------------------------------------------
*/
const setToken = token => localStorage.setItem(AUTH_TOKEN, token)

const getToken = () => localStorage.getItem(AUTH_TOKEN)

const getTokenData = () => {
  return localStorage.getItem(AUTH_TOKEN)
    ? camelizeKeys(jwtDecode(localStorage.getItem(AUTH_TOKEN)))
    : null
}
const removeToken = () => localStorage.removeItem(AUTH_TOKEN)

const setLang = lang => localStorage.setItem(LANG, lang)
const getLang = () => localStorage.getItem(LANG) || null
const removeLang = () => localStorage.removeItem(LANG)

const setPermissions = permissions =>
  localStorage.setItem(PERMISSIONS, JSON.stringify(permissions))
const getPermissions = () =>
  localStorage.getItem(PERMISSIONS)
    ? JSON.parse(localStorage.getItem(PERMISSIONS))
    : []
const removePermissions = () => localStorage.removeItem(PERMISSIONS)

export {
  setToken,
  getToken,
  removeToken,
  getTokenData,
  setLang,
  getLang,
  removeLang,
  setPermissions,
  getPermissions,
  removePermissions,
}
