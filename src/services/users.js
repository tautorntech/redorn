import Api from './api/base'

const path = '/users'

const Users = {
  getUser(id) {
    return Api.request(`${path}/${id}`, { method: 'GET' })
  },
  setUser(id, params) {
    return Api.request(`${path}/${id}`, { method: 'PATCH', params })
  }
}

export default Users