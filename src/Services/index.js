import { create } from 'apisauce'
import { Config } from 'Config'

const getToken = () => {
  return 'token'
}

export const apiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL:
    process.env.NODE_ENV === 'development'
      ? Config.DEV_URL
      : Config.PRODUCTION_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
  timeout: 15000,
})

export default apiClient
