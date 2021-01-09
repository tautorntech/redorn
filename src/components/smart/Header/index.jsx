import React from 'react'
import { HeaderStyled } from './styles'


function Header() {
  return (
    <HeaderStyled>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        href="https://github.com/tautorntech/redorn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn RedOrn
      </a>
    </HeaderStyled>
  )
}

export default Header
