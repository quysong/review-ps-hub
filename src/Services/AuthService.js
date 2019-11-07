import apiClient from './'

/**
 * @method Get
 * @param {Number} id
 * @description: Get list role of a Users *
 */
const getUserRoles = id =>
  apiClient.get(`/api/core/users/${id}/roles`).then(res => res.data)

export const AuthService = {
  getUserRoles,
}
