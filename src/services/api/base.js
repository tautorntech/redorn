import axios from 'axios'
import qs from 'qs'
import { getLanguage } from '~helpers/locale'
import { validateRequest, onResponseError } from './interceptors'

const getConfig = async () => ({
  headers: {
    Accept: 'application/json',
    'Accept-Language': getLanguage(),
    Authorization: 'bearer xpto'
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'indices' })
  }
})

const baseApi = (baseURL, config) => {
  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config
  })

  axiosApi.request = async (path, options, showLoading = true) => {
    const mergedOptions = {...options, ...getConfig()}

    return axiosApi(path, mergedOptions)
      .then((resp) => resp.data)
      .catch((error) => {
        throw error
      })
  }

  axiosApi.interceptors.request.use(validateRequest)
  axiosApi.interceptors.response.use(null, onResponseError)

  return axiosApi
}

export default baseApi