import {theme} from "./theme";
import {createGlobalStyle, css} from 'styled-components'
import NotoSansAmBlack from './../assets/Fonts/NotoSansArmenian-Black.ttf'
import NotoSansAmBold from './../assets/Fonts/NotoSansArmenian-Bold.ttf'
import NotoSansAmXBold from './../assets/Fonts/NotoSansArmenian-ExtraBold.ttf'
import NotoSansAmXLight from './../assets/Fonts/NotoSansArmenian-ExtraLight.ttf'
import NotoSansAmLight from './../assets/Fonts/NotoSansArmenian-Light.ttf'
import NotoSansAmMedium from './../assets/Fonts/NotoSansArmenian-Medium.ttf'
import NotoSansAmRegular from './../assets/Fonts/NotoSansArmenian-Regular.ttf'
import NotoSansAmSemiBold from './../assets/Fonts/NotoSansArmenian-SemiBold.ttf'
import NotoSansAmThin from './../assets/Fonts/NotoSansArmenian-Thin.ttf'

export const StyledBtn = css`
  padding: 8px 14px;
  border-radius: 12px;

  background-color: ${theme.colors.neonBlue};

  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  font-style: normal;

  color: white;
  

  ${theme.media.md} {
    padding: 12px 18px;
  }
`

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmThin}) format("truetype");
    font-weight: 100;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmXLight}) format("truetype");
    font-weight: 200;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmLight}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmRegular}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmMedium}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmSemiBold}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmBold}) format("truetype");
    font-weight: 700;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmXBold}) format("truetype");
    font-weight: 800;
  }

  @font-face {
    font-family: "Noto Sans Armenian";
    src: url(${NotoSansAmBlack}) format("truetype");
    font-weight: 900;
  }


  html {
    box-sizing: border-box;
    font-size: 16px;
    letter-spacing: 1px;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: inherit;
  }

  body {
    font-family: "Noto Sans Armenian", sans-serif;
    word-break: break-word;
    background-color: ${theme.colors.darkGrey};
    color: ${theme.colors.white};
  }

  a {
    color: inherit;
    text-decoration: none;
    &:active,
    &:focus,
    &:visited {
      color: inherit;
    }
  }
  
  ul {
    list-style-type: none;
  }

  .opacity-block {
    position: relative;

    * {
      position: relative;
      z-index: 1;
    }

    &::before {
      content: "";

      position: absolute;
      z-index: 0;

      top: 6px;
      bottom: 6px;
      left: -8px;
      right: -8px;

      border-radius: 4px;

      box-shadow: -4px 7px 20px 0 #0000004a;

      ${theme.media.md} {
        border-radius: 6px;
      }

      ${theme.media.lg} {
        border-radius: 8px;
      }
    }
  }

  .shadow-section {
    box-shadow: 0 0px 42px 4px #5a5a5a1c;
  }
  
  .btn-gradient {
    ${StyledBtn};
    background: linear-gradient(to right,  ${theme.colors.pink},  ${theme.colors.purple});
    background-size: 150% 150%;
    background-position: 99% 50%;

    height: 100vh;
    transition: all ease .3s;
    &:hover {
      background-position: 0% 40%;

    }
  }
`

export const GradientBorder = css`
  position: relative;
  padding: 3px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: transform .3s ease, box-shadow .3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background-image: linear-gradient(to right, ${theme.colors.neonBlue} 15%, ${theme.colors.pink} 100%);
    transition: transform .7s ease;
  }

  &:hover {
    ${props => props.scale && `transform: scale(1.1);
`}
    box-shadow: 0 0 10px ${theme.colors.neonBlue};
    &::before {
      transform:  rotate(320deg);
    }
  }
`

