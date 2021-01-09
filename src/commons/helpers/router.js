import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const push = (path, state) => history.push(path, state)

export const replace = (path, state) => history.replace(path, state)
