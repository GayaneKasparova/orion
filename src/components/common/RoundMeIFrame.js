import React from "react"
import styled from "styled-components"

const RoundMeIFrame = ({link, title}) => {
  return <StyledIFrame
    title={`${title} round view`}
    width="1280"
    height="920"
    src={link}
    frameBorder="0"
    webkitallowfullscreen={true}
    mozallowfullscreen={true}
    allowFullScreen={true}
    autoPlay={true}
  />
}

const StyledIFrame = styled.iframe`
  width: 100%;
  max-height: 65vh;
`

export default RoundMeIFrame

