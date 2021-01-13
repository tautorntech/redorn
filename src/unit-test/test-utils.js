import React, { Fragment } from 'react'
import { Router } from 'react-router-dom'
import { history } from 'commons/helpers/router'
import { render } from '@testing-library/react'

const AllTheProviders = ({ children }) => (
  <Fragment>
    <Router history={history} >
      {children}
    </Router>
  </Fragment>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }

export default AllTheProviders