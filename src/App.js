import React, { Fragment } from 'react'
import { Router } from 'react-router-dom'
import { history } from 'commons/helpers/router'
import Main from 'containers/Main'
import GlobalStyles from 'commons/styles/GlobalStyles'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router history={history}>
        <Main />
      </Router>
    </Fragment>
  )
}

export default App
