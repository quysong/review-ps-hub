import apiClient from './index'

/**
 * @method GET
 * @description Get list users
 */

const getListDemo = () => {
  console.log('getListDemo')
  let mockData = {
    items: [
      {
        id: 1,
        name: 'name 1',
      },
      {
        id: 2,
        name: 'name 1',
      },
    ],
    totalPage: 1,
    totalCount: 2,
    result: 'success',
  }
  return mockData
  // return apiClient
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.data)
}

export const DemoService = {
  getListDemo,
}
