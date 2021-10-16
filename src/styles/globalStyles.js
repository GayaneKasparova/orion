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
  }

  a {
    text-decoration: none;
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

      background-color: #ffffff87;
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
`

export const StyledBtn = css`
  min-height: 48px;
  padding: 12px 32px;
  border-radius: 10px;

  background-color: ${theme.colors.red};

  font-size: 16px;
  text-decoration: none;
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};

  color: white;

  ${theme.media.md} {
    height: 56px;
    padding: 16px 56px;
    font-size: 20px;
  }
`