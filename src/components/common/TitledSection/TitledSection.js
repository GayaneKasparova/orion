import React from "react"
import styled from "styled-components"
import { theme } from "../../../styles/theme"
import { ContainerBox } from "../ContainerBox/ContainerBox"
import { Link } from "gatsby"
import useDictionary from "../../../hooks/use-dictionary"

const TitledSection = ({ title, id, children, seeMoreLink }) => {
  const seeMoreText = useDictionary("seeMore")
  return (
    <SectionWrapper id={id}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>
        {children}
        {seeMoreLink && <SeeMore link={seeMoreLink} text={seeMoreText} />}
      </SectionContent>
    </SectionWrapper>
  )
}

const SectionWrapper = styled(ContainerBox)`
  
  @keyframe fullWidth{
    100% {
      width: 100%;
    }
  }
  
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 36px;
  padding-bottom: 36px;

  ${theme.media.md} {
    flex-direction: row;

    padding-top: 48px;
    padding-bottom: 48px;
    &:hover {
      h2::after {
        transform: scaleX(1.3) translate(15%);
        transition: all .3s ease;

      }
    }
  }

  ${theme.media.lg} {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  ${theme.media.xl} {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`
const SeeMore = styled(Link)`

`
const SectionTitle = styled.h2`
  position: relative;
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.05em;
  font-family: Noto Sans Armenian, sans-serif;
  font-weight: 500;
  color: ${theme.colors.red};
  
  &::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 42px;
    height: 3px;
    width: 52px;
    background-image: linear-gradient(-90deg, ${theme.colors.neonBlue} 0%, ${theme.colors.pink} 100%);
  }
  
  ${theme.media.md} {
    max-width: 232px;
    width: 25%;
  }
`

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ul {
    width: 100%;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  ${theme.media.md} {
    padding-top: ${theme.space.xl}px;
    max-width: 872px;
    width: 75%;
  }
`


export default TitledSection