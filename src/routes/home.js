import { lazy } from 'react'

const Home = lazy(() => import('~containers/Home'))

const path = '/home'

const home = [
  {
    path: `${path}`,
    component: Home,
    exact: true
  },
]

export default home