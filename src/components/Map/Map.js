import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"

const Map = () => {

  return (
    <MapWrapper dangerouslySetInnerHTML={{
      __html: "<iframe src=\"https://maps.google.com/maps?q=40.1892341736294, 44.51844651157423&z=18&output=embed\" width=\"400\" height=\"360\" frameborder=\"0\" style=\"border:0\"></iframe>\n"
    }} />

  )
}

export default Map

const MapWrapper = styled.div`
  margin-top: ${theme.space.s}px;

  ${theme.media.md} {
    margin-top: ${theme.space.m}px;
  }

  ${theme.media.lg} {
    margin-top: ${theme.space.l}px;
  }
  filter: grayscale(.1) contrast(.7) saturate(0.5) invert(.9);

  iframe {
    max-width: 100%;
    min-width: 100%;
    width: 5000px;
    height: 260px;

    ${theme.media.md} {
      height: 360px;
    }
    ${theme.media.lg} {
      height: 400px;
    }
  }
`