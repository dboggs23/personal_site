import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --dark-blue: #05386B;
    --olive: #379683;
    --green: #5cdb95;
    --light-green: #8ee4af;
    --ivory-green: #edf5e1;
    --black: #2E2E2E;
    --white: #cdcfd1;
  }

  html {
    background-size: 450px;
    ///*background-attachment: fixed;*/
    font-size: 10px;
    margin:0;
    padding:0;
  }

  body {
    font-size: 2rem;
    
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--dark-blue);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--ivory-green);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 10px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--ivory-green) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--ivory-green) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  

`

export default GlobalStyles
