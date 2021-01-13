import router from 'helpers/router'

const STATUS = Object.freeze({
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  422: 'UNPROCESSABLE_ENTITY',
  429: 'MANY_REQUESTS',
  434: 'USER_NOT_FOUND',
  500: 'FATAL',
  503: 'UNAVAILABLE',
  504: 'TIMEOUT'
})

const errors = Object.freeze({
  BAD_REQUEST: () => console.log('BAD_REQUEST'),
  FORBIDDEN: () => console.log('FORBIDDEN'),
  USER_NOT_FOUND: () => router.replace('/register'),
  FATAL: () => console.log('FATAL'),
  UNAVAILABLE: () => console.log('UNAVAILABLE'),
  TIMEOUT: () => console.log('TIMEOUT'),
  UNKNOWN: () => console.log('UNKNOWN'),
  MANY_REQUESTS: () => console.log('MANY_REQUESTS'),
  UNPROCESSABLE_ENTITY: () => console.log('UNPROCESSABLE_ENTITY'),
  NOT_FOUND: () => console.log('NOT_FOUND')
})

const buildError = (status) => {
  const errorCode = STATUS[status]
  const error = errors[errorCode] || errors.UNKNOWN

  error()
}

export const onResponseError = (error) => {
  const responseStatus = error && error.response && error.response.status

  buildError(responseStatus)

  return Promise.reject(error)
}

export const validateRequest = (config) => config