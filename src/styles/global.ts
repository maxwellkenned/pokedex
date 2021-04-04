import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color:  #f4f4f7;
    color: #1a1a1a;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`

export default GlobalStyles
