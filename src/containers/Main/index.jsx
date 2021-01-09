import React, { Suspense, memo } from 'react'
import { Switch } from 'react-router-dom'
import routes from 'routes'
import AppRoute from './AppRoute'

const Main = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route, index) => <AppRoute key={index} {...route} />)}
      </Switch>
    </Suspense>
  )
}

export default memo(Main)