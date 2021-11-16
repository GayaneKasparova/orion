import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
import useDictionary from "../../hooks/use-dictionary"
import { theme } from "../../styles/theme"

const Card = ({ title, cover, description, link, reverse }) => {

  return (
    <CardWrapper reverse={reverse}>
      {cover && <Cover alt={title} image={cover.gatsbyImageData} />}

      <TextWrapper reverse={reverse}>
        <Link to={link}>
          <Title>{title}</Title>
        </Link>
        <Description reverse={reverse}>{description}</Description>
        <Button
          to={link}
          className={"btn-gradient"}
          reverse={reverse}
        >
          {useDictionary("seeMore")}
        </Button>
      </TextWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${theme.space.s}px;
  border: 1px solid ${theme.colors.grey};
  padding: 16px 20px 40px;
  border-radius: 16px;

  ${theme.media.lg} {
    width: calc(80% - 40px);
    flex-direction: ${props => props.reverse === "true" ? "row-reverse" : "row"};
    justify-content: space-between;
    margin: ${theme.space.m}px;
    transform: translateX(${props => props.reverse === "true" ? "40px" : "-40px"});
    &:hover {
      .btn-gradient {
        transform: translate(${props => props.reverse === "true" ? "40px" : "-40px"}, 50%) scale(1.03);
      }
    }
  }
  


`

const Cover = styled(GatsbyImage)`
  width: 100%;

  ${theme.media.lg} {
    min-width: 200px;
    max-width: 400px;
  }
`

const TextWrapper = styled.div`
  ${theme.media.lg} {
    margin: ${props => props.reverse === "true" ? "0 15px 0 0" : "0 0 0 15px"};
  }
`
const Title = styled.h3`
  margin: 8px 0;
  font-size: 22px;
`
const Description = styled.p`
  text-align: justify;
  font-size: 16px;
`

const Button = styled(Link)`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  ${theme.media.lg} {
    max-height: 44px;
    right: ${props => props.reverse === "true" ? "unset" : "40px"};
    left: ${props => props.reverse === "true" ? "40px" : "unset"};
  }
`

export default Card

