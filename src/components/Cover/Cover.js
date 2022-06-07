import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../../styles/theme"
import { ContainerBox } from "../common/ContainerBox/ContainerBox"

const Cover = ({ image, title, styles }) => {
  return (
    <CoverWrapper styles={styles}>
      <CoverImage image={image?.gatsbyImageData} alt={image?.alt || title} />
      <Title><h1>{title}</h1></Title>
    </CoverWrapper>
  )
}

const CoverWrapper = styled.div`
  position: relative;
  ${props => props.styles}
`
const CoverImage = styled(GatsbyImage)`
  max-height: 40vh;
  margin-bottom: ${theme.space.m}px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 8vh;
    width: 120vw;
    z-index: 3;
    background-image: linear-gradient(31deg, ${theme.colors.neonBlue} 45%, ${theme.colors.purple} 80%);
    transform: translate(14%, 46%) rotate(-4deg);
    
    ${theme.media.sm} {
      height: 18vh;
      width: 200vw  ;
    }  
    ${theme.media.xl} {
      height: 19vh;
      width: 200vw  ;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 8vh;
    width: 120vw;
    z-index: 2;
    background-image: linear-gradient(31deg, ${theme.colors.neonBlue} 45%, ${theme.colors.purple} 80%);
    transform: translate(14%, 60%) rotate(-4deg);
    
    ${theme.media.sm} {
      height: 18vh;
      width: 200vw  ;
    }  
    ${theme.media.xl} {
      height: 23vh;
      width: 200vw  ;
    }
  }
`

const Title = styled(ContainerBox)`
  
  ${theme.media.sm} {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 3vh;
    z-index: 33;
    h1 {
      text-align: right;
    }
  }
  
`

export default Cover