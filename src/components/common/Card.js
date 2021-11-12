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
          className={'btn-gradient'}
          reverse={reverse}
        >
          {useDictionary("seeMore")}
        </Button>
      </TextWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: calc(80% - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${theme.space.s}px;
  border: 1px solid ${theme.colors.grey};
  padding: 16px 16px 32px;
  border-radius: 16px;
  ${theme.media.lg} {
    flex-direction: ${props => props.reverse === "true" ? 'row-reverse' : 'row'};
    justify-content: space-between;
    margin: ${theme.space.m}px;
    transform: translateX(${props => props.reverse === "true" ? '40' : '-40'}px);
  }
`

const Cover = styled(GatsbyImage)`
  max-width: 360px;
`

const TextWrapper = styled.div`
  ${theme.media.lg} {
    margin:  ${props => props.reverse === "true" ? '0 15px 0 0' : '0 0 0 15px'};
  }
`
const Title = styled.h3`
  margin: 8px 0;
`
const Description = styled.p`
  text-align: justify;
  font-size: 14px;
  font-weight: 300;
`

const Button = styled(Link)`
  display: inline-block;
  position: absolute;
  bottom: -18px;
  right: 32px;
  ${theme.media.lg} {
    max-height: 44px;
    right: ${props => props.reverse === "true" ? 'unset' : '32px' };
    left: ${props => props.reverse === "true" ? '32px' : 'unset' };
  }
`

export default Card

