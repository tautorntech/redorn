import React from 'react'
import { HeaderStyled } from './styles'

const testid = "header"

function Header() {
  return (
    <HeaderStyled data-testid={testid}>
      <p>
        Tautorn Tech
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
