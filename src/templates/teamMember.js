import React  from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { ContainerBox } from "../components/common/ContainerBox/ContainerBox"
import styled from "styled-components"
import { theme } from "../styles/theme"
import RichText from "../components/Article/Content/RichText"

const TeamMember = ({
                   data: {
                     teamMember: {
                       name,
                       photo,
                       title,
                       bio
                     }
                   }
                 }) => {

  return (
    <ContainerBox>
      {photo && <CoverImage image={photo?.gatsbyImageData} alt={photo?.alt || name} />}
      <ArticleTitle>{name}</ArticleTitle>
      <h2>{title}</h2>
      <RichText data={{ title, bio }}/>
    </ContainerBox>
  )
}

export const query = graphql`
    query TeamMember($slug: String!, $locale: String!) {
        teamMember: datoCmsTeam(slug: { eq: $slug }, locale: {eq: $locale}) {
            slug
            locale
            name
            photo {
                gatsbyImageData(aspectRatio: 1, imgixParams: {w: "200", h: "200", fit: "crop"})
            }
            title
            bio
        }
    }
`

const CoverImage = styled(GatsbyImage)`
  max-height: calc(100vh - 90px);
`

const ArticleTitle = styled.h1`
  margin: ${theme.space.m}px 0;
  color: ${theme.colors.red};

  ${theme.media.md} {
    margin: ${theme.space.l}px 0;
  }

  ${theme.media.lg} {
    margin: ${theme.space.xl}px 0;
  }
`

export default TeamMember