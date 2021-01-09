import { createGlobalStyle } from 'styled-components'
import './font.css'

const globalStyles = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  body {
    line-height: normal;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    display: flex;
  }
`

export default globalStyles
