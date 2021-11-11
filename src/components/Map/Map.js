import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"

const Map = () => {

  return (
    <MapWrapper dangerouslySetInnerHTML={{
      __html: "<iframe src=\"https://maps.google.com/maps?q=40.1892341736294, 44.51844651157423&z=18&output=embed\" width=\"400\" height=\"260\" frameborder=\"0\" style=\"border:0\"></iframe>\n"
    }} />

  )
}

export default Map

const MapWrapper = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-top: ${theme.space.s}px;

  ${theme.media.md} {
    margin-left: auto;
    margin-right: 0;
    margin-top: ${theme.space.m}px;
  }

  ${theme.media.lg} {
    margin-top: ${theme.space.l}px;
  }

  iframe {
    width: 100%;
  }
`