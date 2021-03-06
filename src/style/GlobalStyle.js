/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  .App {
         text-align: center;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
         sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
		text-align: left;
		margin-left: 40px;
  }

   code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
         monospace;
}
	 #root{
		 display: inline-flex;
     flex-direction: column;
	 }
	 .epub-container{
		 background-color: #F6EA7BFF;
		 order: 1;
	 }
`

export default GlobalStyle
