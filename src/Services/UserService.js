import apiClient from './index'

/**
 * @method Post
 * @param {String} username
 * @param {String} password
 * @param {String} display_name
 * @param {Email} email
 * @description: Create new user
 */

/**
 * @method GET
 * @param {Number} page
 * @param {Number} limit
 * @param {String} keyword
 * @description Get list users
 */

const getListUser = params =>
  apiClient.get('/api/core/users/list', params).then(res => res.data)

/**
 * @method GET
 * @param {Number} userId
 * @description Get user general information *
 */
const getUserInfo = id =>
  apiClient.get(`/api/core/users/${id}`).then(res => res.data)

/**
 * @method GET
 * @param {Number} userId
 * @description Get list user'roles by user id
 */
const getUserRoles = id =>
  apiClient.get(`/api/core/users/${id}/roles`).then(res => res.data)

/**
 * @method POST
 * @param {String} avatar link avatar of user
 * @param {String} display_name Display name of user
 * @param {Email} email Email of user
 * @param {String} password Password
 * @param {String} phone Phone's number
 */

const createUser = values =>
  apiClient.post(`/api/core/users/add`, values).then(res => res.data)
/**
 * @method Put
 * @param {String} avatar link avatar of user
 * @param {String} display_name Display name of user
 * @param {Email} email Email of user
 * @param {String} password Password
 * @param {String} phone Phone's number
 */

const editUser = (id, values) =>
  apiClient.put(`/api/core/users/backend/${id}`, values).then(res => res.data)

/**
 * @method DELETE
 * @param {Number} userId
 * @description Delete user
 */
const deleteUser = userId =>
  apiClient.delete(`/api/core/users/backend/${userId}`).then(res => res.data)
/**
 * @method PUT
 * @param {Array} items List role_id
 * @param {Number} userId
 * @description Set Roles for user
 */
const setUserRoles = (userId, values) =>
  apiClient
    .put(`/api/core/users/roles/assign/${userId}`, values)
    .then(res => res.data)

/**
 * @method PUT
 * @param {String} password
 * @param {String} confirmPassword
 * @description Admin change password for user
 */

const changeUserPassword = (userId, values) =>
  apiClient
    .put(`/api/core/users/admin/change_password/${userId}`, values)
    .then(res => res.data)

export const UserService = {
  editUser,
  createUser,
  deleteUser,
  getListUser,
  getUserInfo,
  getUserRoles,
  setUserRoles,
  changeUserPassword,
}
