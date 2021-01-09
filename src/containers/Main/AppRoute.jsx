import React, { memo } from 'react'
import { Route } from 'react-router-dom'
import Layout from './Layout'

const DefaultLayout = ({ children }) => <Layout>{children}</Layout>

function AppRoute ({ component: Component, layout: Layout, ...otherProps }) {

  const renderLayout = props => (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
  )

  return (
    <Route {...otherProps} render={(props) => renderLayout(props)} />
  )
}

AppRoute.defaultProps = {
  layout: DefaultLayout
}

export default memo(AppRoute)