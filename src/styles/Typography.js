import { createGlobalStyle } from 'styled-components'
import Amatic from '../assets/AmaticSC-Regular.ttf'
import Josefin from '../assets/JosefinSans-Regular.ttf'
import Garamond from '../assets/EBGaramond-Regular.ttf'
import AmaticBold from '../assets/AmaticSC-Bold.ttf'

const Typography = createGlobalStyle`
  @font-face {//monospace
    font-family: 'JosefinSans';
    src: url(${Josefin});
  }
  @font-face {//handwritten
      font-family: 'Amatic';
      src: url(${Amatic});
  }
  @font-face {//serif
      font-family: 'Garamond';
      src: url(${Garamond});
  }
  @font-face {
      font-family: 'AmaticBold';
      src: url(${AmaticBold});
  }
  html {
    font-family: 'garamond', serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .amatic{
    font-family: 'Amatic';
  }

  .garamond{
    font-family: Garamond;
  }

  .josefin{
    font-family: JosefinSans;
  }

  .intro{
      font-family: 'AmaticBold';
      letter-spacing: .8rem;
      font-size:5rem;
  }
`

export default Typography
