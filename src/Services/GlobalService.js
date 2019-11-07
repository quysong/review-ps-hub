import apiClient from 'Services'

const getGlobalData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        result: 'success',
        item: {
          configs: [],
          themes: {
            mainColor: 'blue',
          },
        },
      })
    }, 1000)
  })
}

// Get data with apiClient
const getListRoles = () =>
  apiClient.get('/api/core/users/roles/list').then(res => res.data)

export const GlobalService = {
  getGlobalData,
  getListRoles,
}
