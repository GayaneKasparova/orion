import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { ContainerBox } from "../components/common/ContainerBox/ContainerBox"
import styled from "styled-components"
import { theme } from "../styles/theme"
import RichText from "../components/Article/Content/RichText"

const TeamMember = ({
                      data: {
                        teamMember: {
                          firstName,
                          lastName,
                          photo,
                          title,
                          bio
                        }
                      }
                    }) => {

  return (
    <PageWrapper>
      {photo && <CoverImage image={photo?.gatsbyImageData} alt={photo.alt || `${firstName} ${lastName}'s photo`} />}
      <ContentWrapper>
        <ArticleTitle>{firstName} {lastName}</ArticleTitle>
        <h2>{title}</h2>
        <RichText data={{ body: bio }} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export const query = graphql`
    query TeamMember($slug: String!, $locale: String!) {
        teamMember: datoCmsTeam(slug: { eq: $slug }, locale: {eq: $locale}) {
            slug
            locale
            firstName
            lastName
            photo {
                gatsbyImageData(aspectRatio: 0.7, imgixParams: {w: "300", h: "400", fit: "crop"})
            }
            title
            bio
        }
    }
`

const PageWrapper = styled(ContainerBox)`
  padding: ${theme.space.m}px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.media.md} {
    padding-top: ${theme.space.l}px;
    flex-direction: row;
    justify-content: space-between;
  }
`

const ContentWrapper = styled.div`

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